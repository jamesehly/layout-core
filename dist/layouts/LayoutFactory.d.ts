import { HorizontalLayout } from "./HorizontalLayout";
import { VerticalLayout } from "./VerticalLayout";
export declare class LayoutFactory {
    createVerticalLayout(id: string): VerticalLayout;
    createHorizontalLayout(id: string): HorizontalLayout;
}
