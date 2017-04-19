import { Element } from './Element';
import { IOriented, Orientation } from '../entities/IOriented';

/**
 * RectElement
 * An Element that will draw its height and width to match the virtual element's
 * height and width.  A RectElement can optionally be oriented; default is null.
 * An oriented element can be opened and closed in that direction using the API.
 */
export class RectElement extends Element {

    constructor(id: string) {
        super(id);
    }

    draw() {
        super.draw();
        this.drawWidth();
        this.drawHeight();
    }

    private drawWidth():void {
        if(!this.virtual.width) {
            return;
        }
        if (this.virtual.width.match(/^(\d*\.)?[\d]+px|%$/)) {
            this.width = this.virtual.width;
        } else if (this.virtual.width.match(/^[\d]+$/)) {
            this.width = this.virtual.width + "px";
        } else {
            throw new Error('Element width is not a css pixel or percentage width or a number.');
        }
    }

    private drawHeight():void {
        if(!this.virtual.height) {
            return;
        }
        if (this.virtual.height.match(/^(\d*\.)?[\d]+px|%$/)) {
            this.height = this.virtual.height;
        } else if (this.virtual.height.match(/^[\d]+$/)) {
            this.height = this.virtual.height + "px";
        } else {
            throw new Error('Element height is not a css pixel or percentage width or a number.');
        }
    }
}