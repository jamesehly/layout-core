import { Layout } from './Layout';
import { Element } from '../elements/Element';
import { RectElement } from '../elements/RectElement';
import { Orientation } from '../entities/IOriented';

export class HorizontalLayout extends Layout {

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

        var totalWidth = parseFloat(this.element.width);
        var fluidWidth = totalWidth;
        var perctWidth = 0;
        var totalHeight = this.element.height;

        // Draw the fixed children
        for (let el of this.fixedChildren) {
            fluidWidth -= parseFloat(el.virtual.width);
            el.virtual.height = totalHeight;
            el.draw();
        }
        // Draw the percentage children
        for (let el of this.perctChildren) {
            let width = (parseFloat(el.initial.width) / 100 * fluidWidth);
            el.virtual.width =  width + 'px';
            perctWidth += width;
            el.virtual.height = totalHeight;
            el.draw();
        }
        fluidWidth -= perctWidth; 
        // Draw the fluid children
        for (let el of this.fluidChildren) {
            var width = fluidWidth / this.fluidChildren.length;
            el.virtual.width = width + 'px';
            el.virtual.height = totalHeight;
            el.draw();
        }
    }

    setup(): void {
        // For each child element in elements, set up a new RectElement figure 
        // out if it has a width set as a pixel value (fixed child), a 100%
        // value (fluid child), or a value set to a specific percentage 
        // (percentage child)
        for (let child of this.element.children) {
            let childElement = new RectElement(child.id);
            childElement.orientation = Orientation.Horizontal;
            if (childElement.initial.width === '100%') {
                this.fluidChildren.push(childElement);
            }
            else if (childElement.initial.width.match(/^[\d]+%$/)) {
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