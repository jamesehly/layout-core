import { Api } from '../src/index';
import { HorizontalLayout } from '../src/layouts/HorizontalLayout';
import { VerticalLayout } from '../src/layouts/VerticalLayout';

describe('LayoutAPI Nested Layout Animations Unit Tests', () => {

    var layout: Api;

    beforeEach(() => {
        layout = new Api();
        let fixture = `
        <div id="parent-element" style="height:400px;width:400px" style="background:#CCC">
            <div id='layout-element-1' style="background:#DDD">
                <div id="el1.1" data-size="100px" style="background:red"></div>
                <div id="el1.2">
                    <div id='layout-element-2' style="background:#EEE">
                        <div id="el2.1" data-size="100px" style="background:yellow"></div>
                        <div id="el2.2"></div>
                        <div id="el2.3" data-size="100px" style="background:green"></div>
                    </div>
                </div>
                <div id="el1.3" data-size="100px" style="background:blue"></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);

        // Make sure the clock is uninstalled so that the tests run in real time.
        jasmine.clock().uninstall();
        jasmine.clock().install();
    })

    afterEach(function () {
        let el = document.getElementById('parent-element');
        if (el)
            el.remove();
        layout.reset();

        jasmine.clock().uninstall();
    })

    it('should animate all frames at once', function () {
        // Arrange
        let startDate = new Date();
        jasmine.clock().mockDate(startDate);
        layout.animationStart = startDate.getTime();
        layout.add("layout-element-1");
        layout.add("layout-element-2", "HorizontalLayout");
        let el1 = document.getElementById('el1.1');
        let el2 = document.getElementById('el1.3');
        let m1 = document.getElementById('el1.2');
        let el3 = document.getElementById('el2.1');
        let el4 = document.getElementById('el2.3');
        let m2 = document.getElementById('el2.2');


        // Act
        layout.start();
        layout.set("el1.1", "height", "20px");
        layout.set("el1.3", "height", "20px");
        layout.set("el2.1", "width", "20px");
        layout.set("el2.3", "width", "20px");
        layout.animate(1000);

        // Assert 
        expect(el1.offsetHeight).toBe(100);
        expect(el2.offsetHeight).toBe(100);
        expect(el3.offsetWidth).toBe(100);
        expect(el4.offsetWidth).toBe(100);
        expect(el1.offsetHeight + el2.offsetHeight + m1.offsetHeight).toBe(400);
        expect(el3.offsetWidth + el4.offsetWidth + m2.offsetWidth).toBe(400);

        jasmine.clock().tick(256);
        expect(el1.offsetHeight).toBe(80);
        expect(el2.offsetHeight).toBe(80);
        expect(el3.offsetWidth).toBe(80);
        expect(el4.offsetWidth).toBe(80);
        expect(el1.offsetHeight + el2.offsetHeight + m1.offsetHeight).toBe(400);
        expect(el3.offsetWidth + el4.offsetWidth + m2.offsetWidth).toBe(400);

        jasmine.clock().tick(240);
        expect(el1.offsetHeight).toBe(60);
        expect(el2.offsetHeight).toBe(60);
        expect(el3.offsetWidth).toBe(60);
        expect(el4.offsetWidth).toBe(60);
        expect(el1.offsetHeight + el2.offsetHeight + m1.offsetHeight).toBe(400);
        expect(el3.offsetWidth + el4.offsetWidth + m2.offsetWidth).toBe(400);

        jasmine.clock().tick(256);
        expect(el1.offsetHeight).toBe(40);
        expect(el2.offsetHeight).toBe(40);
        expect(el3.offsetWidth).toBe(40);
        expect(el4.offsetWidth).toBe(40);
        expect(el1.offsetHeight + el2.offsetHeight + m1.offsetHeight).toBe(400);
        expect(el3.offsetWidth + el4.offsetWidth + m2.offsetWidth).toBe(400);

        jasmine.clock().tick(256);
        expect(el1.offsetHeight).toBe(20);
        expect(el2.offsetHeight).toBe(20);
        expect(el3.offsetWidth).toBe(20);
        expect(el4.offsetWidth).toBe(20);
        expect(el1.offsetHeight + el2.offsetHeight + m1.offsetHeight).toBe(400);
        expect(el3.offsetWidth + el4.offsetWidth + m2.offsetWidth).toBe(400);
    })
}); 