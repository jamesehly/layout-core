import { Layout } from './layouts/Layout';
import { Element } from './elements/Element';
export declare class Api {
    animationStart: number;
    private _factory;
    private _layouts;
    constructor();
    readonly layouts: Array<Layout>;
    start(): void;
    stop(): void;
    reset(): void;
    add(identifier: string, type?: string, options?: any): void;
    get(identifier: string): Layout;
    set(id: string, option: string, value: string): void;
    find(id: string): Element;
    draw(): void;
    animate(duration: number): Promise<boolean>;
    open(identifier: string, duration?: number): Promise<boolean>;
    close(identifier: string, duration?: number): Promise<boolean>;
}
export * from './elements/Element';
export * from './elements/FillElement';
export * from './elements/RectElement';
export * from './elements/VirtualElement';
export * from './layouts/Layout';
export * from './layouts/HorizontalLayout';
export * from './layouts/VerticalLayout';
export * from './layouts/LayoutFactory';
export * from './animate/Animator';
