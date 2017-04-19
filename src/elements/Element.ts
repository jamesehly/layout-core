import { IDrawable } from "../entities/IDrawable";
import { IElement } from "../entities/IElement";
import { IOriented, Orientation } from "../entities/IOriented";
import { VirtualElement } from "./VirtualElement";

/**
 * Element
 * Abstract class that represents a DOM HTML Element.  All elements have a 
 * draw method that they need to implement, which tells the actual dom element
 * how it should be drawn on the screen.
 */
export class Element implements IElement, IDrawable, IOriented {
    private _element: HTMLElement;
    private _virtual: VirtualElement;
    private _factual: VirtualElement;
    private _initial: VirtualElement;
    private _movable: VirtualElement;
    private _orientation: Orientation;

    public constructor(id: string) {
        this.set(id);
        this._virtual = new VirtualElement();
        this._initial = new VirtualElement();
        this._factual = new VirtualElement();
        this._movable = new VirtualElement();
        this._orientation = null;
        this.setup();
    }

    get(): HTMLElement {
        return this._element;
    }

    private set(id: string): void {
        this._element = document.getElementById(id);
    }

    get element(): HTMLElement {
        return this.get()
    }

    get virtual(): VirtualElement {
        return this._virtual;
    }

    get initial(): VirtualElement {
        return this._initial;
    }

    get factual(): VirtualElement {
        return this._factual;
    }

    get movable(): VirtualElement {
        return this._movable;
    }

    get children(): Array<HTMLElement> {
        let children = new Array<HTMLElement>();
        for (let i = 0;i < this.element.children.length; i++) {
            let child = this._element.children[i];
            if (!child.id) {
                child.id = this._element.id + '-child-' + i;
            }
            children.push(document.getElementById(child.id));
        }
        return children;
    }

    get orientation() {
       return  this._orientation
    }

    set orientation(orientation: Orientation) {
        this._orientation = orientation;
    }

    get id(): string {
        return this._element.id;
    }

    get height(): string {
        return this._element.offsetHeight + 'px';
    }

    set height(size: string) {
        this._element.style.height = size;
        this._factual.height = size;
    }

    get width(): string {
        return this._element.offsetWidth + 'px';
    }

    set width(size: string) {
        this._element.style.width = size;
        this._factual.width = size;
    }

    get overflow(): string {
        return this._element.style.overflow;
    }

    get float(): string {
        return this._element.style.cssFloat;
    }

    /**
     * Returns the attribute value of a given parameter name
     * @param name 
     * @returns string
     */
    attr(name: string): string {
        return this._element.getAttribute(name);
    }

    /**
     * When draw is called, properties from the virtual element are realized
     * on the actual dom element.
     * @returns void
     */
    draw(): void {
        this.drawOverflow();
        this.drawFloat();
    }

    /**
     * Store the data values to the intial and virtual objects.
     * @returns void
     */
    setup(): void {
        // Allow data-size to be a default for both height and width
        let size =  this.attr('data-size');
        let height = this.attr('data-height') || size;
        let width = this.attr('data-width') || size;
        
        this._initial.height = this._virtual.height = height || '100%';
        this._initial.width = this._virtual.width = width || '100%';
        this._initial.overflow = this._virtual.overflow = this.attr('data-overflow') || 'hidden';
    }

    private drawOverflow(): void {
        if (!this.virtual.overflow) {
            return;
        }
        if (this._virtual.overflow && this._virtual.overflow.match(/visible|hidden|scroll|auto|inherit|initial|unset/)) {
            this._element.style.overflow = this._virtual.overflow;
            this._factual.overflow = this._virtual.overflow;
        } else {
            throw new Error('Element\'s overflow style does not match a css overflow type.')
        }
    }

    private drawFloat(): void {
        if (!this.virtual.float) {
            return;
        }
        if (this._virtual.float && this._virtual.float.match(/left|right|none|inherit|initial/)) {
            this._element.style.cssFloat = this._virtual.float;
            this._factual.float = this._virtual.float;
        } else {
            throw new Error('Element\'s float style does not match a css float type.')
        }
    }
}