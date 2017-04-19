import { IDrawable } from '../entities/IDrawable';
import { Element } from '../elements/Element';
export declare abstract class Layout implements IDrawable {
    private _element;
    private _elements;
    constructor(element: Element);
    addElement(element: Element): void;
    readonly elements: {
        [id: string]: Element;
    };
    readonly element: Element;
    abstract draw(): void;
    abstract setup(): void;
}
