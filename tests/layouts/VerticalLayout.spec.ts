import { VerticalLayout } from '../../src/layouts/VerticalLayout';
import { FillElement } from '../../src/elements/FillElement';
import { Orientation } from '../../src/entities/IOriented';

/**
 * Test the VerticalLayout Class
 */
describe('VerticalLayout Unit Tests', function () {

    afterEach(() => {
        let el = document.getElementById('parent-element');
        if (el)
            el.remove();
    })

    it('it should setup a vertical layout with fluid children', function () {
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        let el0 = document.getElementById('layout-element-child-0');
        let el1 = document.getElementById('layout-element-child-1');
        let el2 = document.getElementById('layout-element-child-2');
        var rect0 = el0.getBoundingClientRect();
        var rect1 = el1.getBoundingClientRect();
        var rect2 = el2.getBoundingClientRect();
        expect(element.children.length).toEqual(3);
        expect(rect0.height).toBeCloseTo(333.3, 1);
        expect(rect1.height).toBeCloseTo(333.3, 1);
        expect(rect2.height).toBeCloseTo(333.3, 1);
        expect(el0.offsetWidth).toBe(500);
        expect(el1.offsetWidth).toBe(500);
        expect(el2.offsetWidth).toBe(500);
    })

    it('it should setup a vertical holy grail layout', function () {
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element'>
                <div data-height='100px'></div>
                <div></div>
                <div data-height='100px'></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        let el0 = document.getElementById('layout-element-child-0');
        let el1 = document.getElementById('layout-element-child-1');
        let el2 = document.getElementById('layout-element-child-2');
        expect(element.children.length).toEqual(3);
        expect(el0.offsetHeight).toBe(100);
        expect(el1.offsetHeight).toBe(800);
        expect(el2.offsetHeight).toBe(100);
        expect(el0.offsetWidth).toBe(500);
        expect(el1.offsetWidth).toBe(500);
        expect(el2.offsetWidth).toBe(500);
    })

    it('it should setup a vertical holy grail layout using percentages', function () {
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element'>
                <div data-height='20%'></div>
                <div></div>
                <div data-height='20%'></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        let el0 = document.getElementById('layout-element-child-0');
        let el1 = document.getElementById('layout-element-child-1');
        let el2 = document.getElementById('layout-element-child-2');
        expect(element.children.length).toEqual(3);
        expect(el0.offsetHeight).toBe(200);
        expect(el1.offsetHeight).toBe(600);
        expect(el2.offsetHeight).toBe(200);
        expect(el0.offsetWidth).toBe(500);
        expect(el1.offsetWidth).toBe(500);
        expect(el2.offsetWidth).toBe(500);
    })

    it('it should setup a vertical complicated layout', function () {
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element'>
                <div data-height='100px'></div>
                <div></div>
                <div></div>
                <div data-height='20%'></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        let el0 = document.getElementById('layout-element-child-0');
        let el1 = document.getElementById('layout-element-child-1');
        let el2 = document.getElementById('layout-element-child-2');
        let el3 = document.getElementById('layout-element-child-3');
        expect(element.children.length).toEqual(4);
        expect(el0.offsetHeight).toBe(100); // 100px
        expect(el1.offsetHeight).toBe(360); // 900 - 180 / 2 = 360
        expect(el2.offsetHeight).toBe(360); // 900 - 180 / 2 = 360
        expect(el3.offsetHeight).toBe(180); // 20% of remaining variable space 900 * .2 = 180
        expect(el0.offsetWidth).toBe(500);
        expect(el1.offsetWidth).toBe(500);
        expect(el2.offsetWidth).toBe(500);
        expect(el3.offsetWidth).toBe(500);
    })

    it('it should setup a vertical complicated layout #2', function () {
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element'>
                <div data-height='100px'></div>
                <div data-height='60%'></div>
                <div data-height='40%'></div>
                <div data-height='200px'></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        let el0 = document.getElementById('layout-element-child-0');
        let el1 = document.getElementById('layout-element-child-1');
        let el2 = document.getElementById('layout-element-child-2');
        let el3 = document.getElementById('layout-element-child-3');
        expect(element.children.length).toEqual(4);
        expect(el0.offsetHeight).toBe(100); // 100px
        expect(el1.offsetHeight).toBe(420); // 700 * .6 = 420
        expect(el2.offsetHeight).toBe(280); // 700 * .4 = 360
        expect(el3.offsetHeight).toBe(200); // 20% of remaining variable space 900 * .2 = 180
        expect(el0.offsetWidth).toBe(500);
        expect(el1.offsetWidth).toBe(500);
        expect(el2.offsetWidth).toBe(500);
        expect(el3.offsetWidth).toBe(500);
    })

    it('it should make its children be vertically oriented', function () {
        let fixture = `
        <div id="parent-element" style="height:100px;width:1000px">
            <div id='layout-element'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        let element = new FillElement('layout-element');
        let layout = new VerticalLayout(element);
        layout.setup();
        layout.draw();
        for (let n in layout.elements) {
            let frame = layout.elements[n];
            expect(frame.orientation).toBe(Orientation.Vertical)
        }
    })
}) 