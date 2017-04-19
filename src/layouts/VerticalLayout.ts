import { Layout } from './Layout';
import { Element } from '../elements/Element';
import { RectElement } from '../elements/RectElement';
import { Orientation } from '../entities/IOriented';

export class VerticalLayout extends Layout {

    private fixedChildren: Array<RectElement>;
    private perctChildren: Array<RectElement>;
    private fluidChildren: Array<RectElement>;

    public constructor(element: Element) {
        super(element);
        this.fixedChildren = new Array<RectElement>();
        this.perctChildren = new Array<RectElement>();
        this.fluidChildren = new Array<RectElement>();
    }

    draw(): void {
        // Draw this layout element.
        this.element.draw();

        var totalHeight = parseFloat(this.element.height);
        var fluidHeight = totalHeight;
        var perctHeight = 0;
        var totalWidth = this.element.width;

        // Draw the fixed children
        for (let el of this.fixedChildren) {
            fluidHeight -= parseFloat(el.virtual.height);
            el.virtual.width = totalWidth;
            el.draw();
        }
        // Draw the percentage children
        for (let el of this.perctChildren) {
            let height = (parseFloat(el.initial.height) / 100 * fluidHeight);
            el.virtual.height =  height + 'px';
            perctHeight += height;
            el.virtual.width = totalWidth;
            el.draw();
        }
        fluidHeight -= perctHeight; 
        // Draw the fluid children
        for (let el of this.fluidChildren) {
            var height = fluidHeight / this.fluidChildren.length;
            el.virtual.height = height + 'px';
            el.virtual.width = totalWidth;
            el.draw();
        }
    }

    setup(): void {
        // For each child element in elements, set up a new RectElement figure 
        // out if it has a height set as a pixel value (fixed child), a 100%
        // value (fluid child), or a value set to a specific percentage 
        // (percentage child)
        for (let child of this.element.children) {
            let childElement = new RectElement(child.id);
            childElement.orientation = Orientation.Vertical;
            if (childElement.initial.height === '100%') {
                this.fluidChildren.push(childElement);
            }
            else if (childElement.initial.height.match(/^[\d]+%$/)) {
                this.perctChildren.push(childElement);
            }
            else {
                this.fixedChildren.push(childElement);
            }
            childElement.virtual.float = "left";
            this.addElement(childElement);
        }
    }
}