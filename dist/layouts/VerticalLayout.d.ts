import { Layout } from './Layout';
import { Element } from '../elements/Element';
export declare class VerticalLayout extends Layout {
    private fixedChildren;
    private perctChildren;
    private fluidChildren;
    constructor(element: Element);
    draw(): void;
    setup(): void;
}
