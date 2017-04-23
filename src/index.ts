import { LayoutFactory } from './layouts/LayoutFactory';
import { Layout } from './layouts/Layout';
import { Element } from './elements/Element';
import { RectElement } from './elements/RectElement';
import { Animator } from './animate/Animator';
import { Orientation } from './entities/IOriented';

/**
 * #Layout API
 * The Layout API operates as the entry point for the layout engine. It follows  
 * the facade pattern as all interactions to the layout can be made through this 
 * api without having to worry about the implementation details of the classes
 * doing the work.
 * 
 * ## What is a layout?
 * 
 * In terms of this project, a layout is an html structure of a parent element
 * and its immediate children.  This can be any type of tag element, but is 
 * typically div tags:
 * 
 * <div id="layout" data-layout="HorizontalLayout">
 *   <div id="child-1">...</div>
 *   <div id="child-2">...</div>
 * </div>
 * 
 * These types of contstructs are used to build layouts using the layout api. 
 * Note that the ids used in the example above can be changed to what ever you 
 * wish.  While an id on the parent layout element is required, the child ids 
 * are optional; they will be generated if not present.  From here on out in the
 * documentation, a parent element is referred to as a layout element and its 
 * child elements are referred to as frame elements.
 * 
 * ## Layout rules
 * 
 * Layouts follow these rules:
 * 
 * 1. The layout element stretches to the height and width of its parent.  
 * 2. Frame elements stretch in the direction of their orientation.
 * 3. By default, frame size is determined by the number of frames across its
 *    orientation.  For example, if there are 3 frames in a vertical layout, 
 *    they will each be 33.333% high and 100% wide.
 * 4. Frames can specify a frame size in pixels or percent.  This size will be
 *    honored for the lifetime of the frame.  Frames that don't specify a size
 *    will stretch to fill the available space and be sized according to rule 3.
 * 5. When the window is resized, the layout and its frames and any sub layouts
 *    and frames are redrawn.
 * 6. @todo: Frames can be added and removed at any time using this api.  
 *    If frames are added via external means, you can use the api to find them. 
 */
export class Api {

    public animationStart: number;

    private _factory: LayoutFactory;
    private _layouts: Array<Layout>;

    constructor() {
        this.reset();
    }

    get layouts(): Array<Layout> {
        return this._layouts;
    }

    /**
     * Starts the process of watching the window for resize events and fires the
     * initial draw of the layout.
     * @param options 
     */
    start() {
        // IE Specific
        if ((<any>window).attachEvent) {
            (<any>window).attachEvent('onresize', () => {
                this.draw();
            });
        }
        else if (window.addEventListener) {
            window.addEventListener('resize', () => {
                this.draw();
            }, true);
        }
        else {
            //The browser does not support Javascript event binding
        }

        this.draw();
    }

    stop() {
        
    }

    /**
     * Initializes and starts the layout core
     * @param disableStart set to false to disable start
     */
    init(disableStart: boolean = false) {
        let layouts = document.querySelectorAll("[data-layout]");
        for (let i = 0; i < layouts.length; i++) {
            let element = layouts[i];
            let type = element.getAttribute('data-layout');
            let id = element.id;
            if (type && id)
                this.add(element.id, type);
        }

        this.order();

        if (!disableStart)
            this.start();
    }

    /**
     * Order the layouts so that they are drawn from the outside in
     */
    order() {
        this._layouts.sort((layoutA, layoutB) => {
            if (layoutA.depth < layoutB.depth) {
                return -1;
            }
            if (layoutA.depth === layoutB.depth) {
                return 0;
            }
            if (layoutA.depth > layoutB.depth) {
                return 1;
            }
        })
    }

    /**
     * reset all layouts and the layout factory
     */
    reset(): void {
        this._factory = new LayoutFactory();
        this._layouts = new Array<Layout>();
    }

    /**
     * Add a layout specified by its id, type and options.  If no type is
     * specified, then it defaults to a VerticalLayout.  There is no default for
     * options.
     * @param identifier 
     * @param type 
     * @param options 
     */
    add(identifier: string, type: string = null, options: any = null): void {
        if (!type)
            type = "VerticalLayout";

        if (!this._factory['create' + type])
            throw Error(`create${type}() is not a method on LayoutFactory.  Check the API for methods on LayoutFactory.`);

        if (options !== null) {
            var layout = this._factory['create' + type](identifier, options);
        } else {
            var layout = this._factory['create' + type](identifier);
        }
        // @todo create a way to stack layouts so they get drawn in order @see http://stackoverflow.com/questions/9028582/how-to-find-which-element-stands-higher-in-the-dom-hierarchy
        this._layouts.push(layout);
    }

    /**
     * Get a layout by id
     * @param identifier of layout element
     */
    get(identifier: string): Layout {
        for (let layout of this._layouts) {
            if (layout.element.id === identifier)
                return layout;
        }
        return null;
    }

    /**
     * Set a value on a layout child.
     * Sets the virtual element's value.  The element will be drawn with the 
     * virtual element values on the next draw call.
     * @param id id of the child element
     * @param option virtual property name
     * @param value virtual property value
     */
    set(id: string, option: string, value: string): void {
        let el = this.find(id);
        if (!el) {
            throw new Error(`${id} could not be found in the registered layouts.`);
        }
        switch (option) {
            case 'height':
                el.virtual.height = el.movable.height = value;
                break;
            case 'width':
                el.virtual.width = el.movable.width = value;
                break;
            case 'overflow':
                el.virtual.overflow = value;
                break;
            default:
                break;
        }
    }

    /**
     * Find a child element of a layout by its id
     * @param id
     */
    find(id: string): Element {
        for (let layout of this._layouts) {
            if (layout.elements[id]) {
                return layout.elements[id];
            }
        }
    }

    /**
     * Redraw all registered layouts
     */
    draw(): void {
        for (let layout of this._layouts) {
            layout.draw();
        }
    }

    /**
     * Animate the draw over a specified duration.
     * @param duration 
     */
    animate(duration: number): Promise<boolean> {
        let changedElements = Array<Element>();
        // Find all of the elements that are changed
        for (let layout of this._layouts) {
            for (let i in layout.elements) {
                var el = layout.elements[i];
                if (el.movable.height || el.movable.width) {
                    changedElements.push(el);
                }
            }
        }

        // store the current values
        let elementStore: { [id: string]: Array<string> } = {};
        for (let el of changedElements) {
            elementStore[el.id] = [el.height, el.width];
        }

        // find the properties on the changed elements
        let animator = new Animator(duration, (delta: number) => {
            if (changedElements.length === 0)
                return;
            for (let el of changedElements) {
                if (el.movable.height && el.movable.height != el.factual.height) {
                    let to = parseInt(el.movable.height);
                    let from = parseInt(elementStore[el.id][0]);
                    el.virtual.height = (to - from) * delta + from + "px";
                } else {
                    el.movable.height = null;
                }
                if (el.movable.width && el.movable.width != el.factual.width) {
                    let to = parseInt(el.movable.width);
                    let from = parseInt(elementStore[el.id][1]);
                    el.virtual.width = (to - from) * delta + from + "px";
                } else {
                    el.movable.width = null;
                }
            }
            this.draw();
        });
        let startDate = this.animationStart || null;
        return animator.animate();
    }

    /**
     * Animate the opening of an element
     * @param duration 
     */
    open(identifier: string, duration: number = null): Promise<boolean> {
        let element = this.find(identifier);
        if (!element)
            throw Error(`Error opening element: element was not found.`);
        if (element.orientation === null || element.orientation === undefined)
            throw Error(`Error opening element: element does not have an orientation.`);

        if (element.orientation === Orientation.Horizontal) {
            this.set(identifier, 'width', element.initial.width);
        } else if (element.orientation === Orientation.Vertical) {
            this.set(identifier, 'height', element.initial.height);
        }
        return this.animate(duration);
    }

    /**
     * Animate the closing of an element
     * @param identifier 
     * @param duration 
     */
    close(identifier: string, duration: number = null): Promise<boolean> {
        let element = this.find(identifier);
        if (!element)
            throw Error(`Error closing element: element was not found.`);
        if (element.orientation === null || element.orientation === undefined)
            throw Error(`Error closing element: element does not have an orientation.`);

        if (element.orientation === Orientation.Horizontal) {
            this.set(identifier, 'width', "0px");
        } else if (element.orientation === Orientation.Vertical) {
            this.set(identifier, 'height', "0px");
        }
        return this.animate(duration)
    }
}

// Elements
export * from './elements/Element';
export * from './elements/FillElement';
export * from './elements/RectElement';
export * from './elements/VirtualElement';

// Layouts
export * from './layouts/Layout';
export * from './layouts/HorizontalLayout';
export * from './layouts/VerticalLayout';
export * from './layouts/LayoutFactory';

// Animate
export * from './animate/Animator';

