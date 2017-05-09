import { Api } from '../src/index';
import { HorizontalLayout } from '../src/layouts/HorizontalLayout';
import { VerticalLayout } from '../src/layouts/VerticalLayout';

describe('LayoutAPI Nested Layouts Unit Tests', () => {

    var layout: Api;

    beforeEach(() => {
        layout = new Api();
        let fixture = `
        <div id="parent-element" style="height:400px;width:400px" style="background:#CCC">
            <div id='layout-element-1' data-layout="VerticalLayout" style="background:#DDD">
                <div id="el1.1" data-size="100px" style="background:red"></div>
                <div id="el1.2">
                    <div id='layout-element-2' data-layout="HorizontalLayout" style="background:#EEE">
                        <div id="el2.1" data-size="100px" style="background:yellow"></div>
                        <div id="el2.2"></div>
                        <div id="el2.3" data-size="100px" style="background:green"></div>
                    </div>
                </div>
                <div id="el1.3" data-size="100px" style="background:blue">
                    <div id='layout-element-3' data-layout="HorizontalLayout" style="background:#EEE">
                        <div data-size="100px" style="background:yellow"></div>
                        <div>
                            <div id='layout-element-4' data-layout="VerticalLayout" style="background:#EEE">
                                <div data-size="100px" style="background:yellow"></div>
                                <div></div>
                                <div data-size="100px" style="background:green"></div>
                            </div>
                        </div>
                        <div data-size="100px" style="background:green"></div>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
    })

    afterEach(function () {
        let el = document.getElementById('parent-element');
        if (el)
            el.remove();
        layout.reset();
    })

    it('should add nested layouts when init is called', () => {
        layout.init(true);
        expect(layout.layouts.length).toBe(4);
        expect(layout.layouts[0] instanceof VerticalLayout).toBeTruthy();
        expect(layout.layouts[1] instanceof HorizontalLayout).toBeTruthy();
        expect(layout.layouts[2] instanceof HorizontalLayout).toBeTruthy();
        expect(layout.layouts[3] instanceof VerticalLayout).toBeTruthy();
    })

    it('should order layouts by their DOM order when order is called', ()=> {
        layout.add('layout-element-4'); 
        layout.add('layout-element-2');
        layout.add('layout-element-3');
        layout.add('layout-element-1', 'HorizontalLayout');
        layout.order();

        expect(layout.layouts.length).toBe(4);
        expect(layout.layouts[0].element.id).toBe('layout-element-1');
        expect(layout.layouts[1].element.id).toBe('layout-element-2');
        expect(layout.layouts[2].element.id).toBe('layout-element-3');
        expect(layout.layouts[3].element.id).toBe('layout-element-4');
    })
}); 