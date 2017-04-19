import { IDrawable } from '../entities/IDrawable';
import { Element } from '../elements/Element';

/**
 * Layout
 * An Abstract class that represents a Layout.  A layout is a composition of
 * Elements.  A layout has a draw method where it it responsible for drawing
 * itself and drawing it's children or triggering the children to draw.
 */
export abstract class Layout implements IDrawable {

    private _element: Element;
    private _elements: {[id: string]: Element};

    constructor(element: Element) {
        this._element = element;
        this._elements = {};
    }

    addElement(element: Element) {
        this._elements[element.id] = element;
    }

    get elements() {
        return this._elements;
    }

    get element(): Element {
        return this._element;
    }

    abstract draw(): void;
    abstract setup(): void;
}