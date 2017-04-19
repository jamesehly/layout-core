export interface IElement {
    id: string;
    children: Array<HTMLElement>;
    get(): HTMLElement;
}
