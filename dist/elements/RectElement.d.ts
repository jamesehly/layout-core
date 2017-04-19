import { Element } from './Element';
export declare class RectElement extends Element {
    constructor(id: string);
    draw(): void;
    private drawWidth();
    private drawHeight();
}
