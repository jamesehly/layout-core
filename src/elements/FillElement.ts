import { Element } from './Element';

export class FillElement extends Element {
    
    constructor(id: string) {
        super(id);
    }

    draw() {
        super.draw();
        this.width = this.element.parentElement.offsetWidth + 'px';
        this.height = this.element.parentElement.offsetHeight + 'px';
    }
}