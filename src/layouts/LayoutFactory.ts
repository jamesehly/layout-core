import { HorizontalLayout } from "./HorizontalLayout";
import { VerticalLayout } from "./VerticalLayout";
import { FillElement } from "../elements/FillElement";

export class LayoutFactory {

    /**
     * Create a Vertical Layout from the provided Id
     * @param id of layout element
     */
    createVerticalLayout(id: string): VerticalLayout {
        let element = new FillElement(id);
        let layout = new VerticalLayout(element);
        layout.setup();
        return layout;
    }

    /**
     * Create a Horizontal Layout from the provided Id
     * @param id of layout element
     */
    createHorizontalLayout(id: string): HorizontalLayout {
        let element = new FillElement(id);
        let layout = new HorizontalLayout(element);
        layout.setup();
        return layout;
    }
}