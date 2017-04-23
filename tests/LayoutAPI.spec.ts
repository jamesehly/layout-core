import { Api } from '../src/index';
import { HorizontalLayout } from '../src/layouts/HorizontalLayout';
import { VerticalLayout } from '../src/layouts/VerticalLayout';

describe('Api Unit Tests', () => {

    var layout: Api;

    beforeEach(() => {
        layout = new Api();
        let fixture = `
        <div id="parent-element" style="height:1000px;width:500px">
            <div id='layout-element' data-layout="HorizontalLayout">
                <div data-size="200px"></div>
                <div></div>
                <div data-size="200px"></div>
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

    it('should add a horizontal layout by type', () => {
        layout.add('layout-element', 'HorizontalLayout');
        expect(layout.layouts.length).toBe(1);
        expect(layout.layouts[0] instanceof HorizontalLayout).toBeTruthy();
    })

    it('should add a horizontal layout by type with options', () => {
        layout.add('layout-element', "HorizontalLayout", { anything: 'test' });
        expect(layout.layouts.length).toBe(1);
        expect(layout.layouts[0] instanceof HorizontalLayout).toBeTruthy();
    })

    it('should add a vertical layout', () => {
        layout.add('layout-element');
        expect(layout.layouts.length).toBe(1);
        expect(layout.layouts[0] instanceof VerticalLayout).toBeTruthy();
    })

    it('should add a horizontal layout by type with options', () => {
        layout.add('layout-element', "VerticalLayout", { anything: 'test' });
        expect(layout.layouts.length).toBe(1);
        expect(layout.layouts[0] instanceof VerticalLayout).toBeTruthy();
    })

    it('should add a horizontal layout when init is called', () => {
        layout.init();
        expect(layout.layouts.length).toBe(1);
        expect(layout.layouts[0] instanceof HorizontalLayout).toBeTruthy();
    })

    it('should throw for a layout type that does not exist', () => {
        expect(() => {
            layout.add('layout-element', 'MyFakeLayoutType');
        }).toThrow();
    })

    it('should get a layout by id', () => {
        layout.add('layout-element');
        let l = layout.get('layout-element');
        expect(l instanceof VerticalLayout).toBeTruthy();
        expect(l.element.id).toBe('layout-element');
    })

    it('should return null if getting a layout by id cannot be found', () => {
        layout.add('layout-element');
        let l = layout.get('asdf');
        expect(l).toEqual(null);
    })

    it('should return undefined if set cannot find the element', () => {
        layout.add('layout-element');
        expect(() => { layout.set('asdf', 'height', '100px') }).toThrow();
    })

    describe("async clocked layout calls", () => {

        beforeEach(() => {
            // Make sure the clock is uninstalled so that the tests run in real time.
            jasmine.clock().uninstall();
            jasmine.clock().install();
        })

        afterEach(() => {
            jasmine.clock().uninstall();
        })

        it('should linearly close the layout frame by width', () => {
            // Arrange
            let startDate = new Date();
            jasmine.clock().mockDate(startDate);
            layout.animationStart = startDate.getTime();
            layout.add('layout-element', 'HorizontalLayout');
            layout.draw();
            let el = document.getElementById("layout-element-child-0");

            // Act
            layout.close("layout-element-child-0", 200)
                .then(() => {
                    let el = layout.find("layout-element-child-0");

                    // Async Assert
                    expect(el.movable.width).toBe("0px");
                    expect(el.factual.width).toBe("0px");
                    expect(el.element.offsetWidth).toBe(0);
                });

            // Assert
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(184);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(168);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(152);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(136);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(120);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(104);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(88);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(72);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(56);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(40);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(24);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(8);
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(0);
            jasmine.clock().tick(16); // One more tick to fire promise resolve
        })

        it('should linearly close the layout frame by height', () => {
            // Arrange
            let startDate = new Date();
            jasmine.clock().mockDate(startDate);
            layout.animationStart = startDate.getTime();
            layout.add('layout-element');
            layout.draw();
            let el = document.getElementById("layout-element-child-0");

            // Act
            layout.close("layout-element-child-0", 200)
                .then(() => {
                    let el = layout.find("layout-element-child-0");

                    // Assert
                    expect(el.movable.height).toBe("0px");
                    expect(el.factual.height).toBe("0px");
                    expect(el.element.offsetHeight).toBe(0);
                });

            // Assert
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(184);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(168);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(152);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(136);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(120);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(104);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(88);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(72);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(56);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(40);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(24);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(8);
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(0);
            jasmine.clock().tick(16); // One more tick to fire promise resolve
        })

        it('should linearly open the layout frame by width', () => {
            // Arrange
            let startDate = new Date();
            jasmine.clock().mockDate(startDate);
            layout.animationStart = startDate.getTime();
            layout.add('layout-element', 'HorizontalLayout');
            layout.draw();
            layout.set("layout-element-child-0", "width", "0px");
            layout.draw();
            let el = document.getElementById("layout-element-child-0");

            // Act
            layout.open("layout-element-child-0", 160)
                .then(() => {
                    let el = layout.find("layout-element-child-0");

                    // Async Assert
                    expect(el.movable.width).toBe("200px");
                    expect(el.factual.width).toBe("200px");
                    expect(el.element.offsetWidth).toBe(200);
                });

            // Assert
            jasmine.clock().tick(16);
            expect(el.offsetWidth).toBe(20);
            jasmine.clock().tick(64);
            expect(el.offsetWidth).toBe(100); 
            jasmine.clock().tick(80);
            expect(el.offsetWidth).toBe(200);
            jasmine.clock().tick(16); // One more tick to fire promise resolve
        })

        it('should linearly open the layout frame by height', () => {
            // Arrange
            let startDate = new Date();
            jasmine.clock().mockDate(startDate);
            layout.animationStart = startDate.getTime();
            layout.add('layout-element');
            layout.draw();
            layout.set("layout-element-child-0", "height", "0px");
            layout.draw();
            let el = document.getElementById("layout-element-child-0");

            // Act
            layout.open("layout-element-child-0", 160)
                .then(() => {
                    let el = layout.find("layout-element-child-0");

                    // Async Assert
                    expect(el.movable.height).toBe("200px");
                    expect(el.factual.height).toBe("200px");
                    expect(el.element.offsetHeight).toBe(200);
                });

            // Assert
            jasmine.clock().tick(16);
            expect(el.offsetHeight).toBe(20);
            jasmine.clock().tick(64);
            expect(el.offsetHeight).toBe(100); 
            jasmine.clock().tick(80);
            expect(el.offsetHeight).toBe(200);
            jasmine.clock().tick(16); // One more tick to fire promise resolve
        })

        it('should be able to animate two elements at once', () => {
            // Arrange
            let startDate = new Date();
            jasmine.clock().mockDate(startDate);
            layout.animationStart = startDate.getTime();
            layout.add('layout-element');
            layout.draw();
            let el1 = document.getElementById("layout-element-child-0");
            let el2 = document.getElementById("layout-element-child-2");

            // Act
            layout.set("layout-element-child-0", "height", "300px")
            layout.set("layout-element-child-2", "height", "400px")
            layout.animate(160)
                .then(() => {
                    let el1 = layout.find("layout-element-child-0");
                    let el2 = layout.find("layout-element-child-2");

                    // Async Assert
                    expect(el1.movable.height).toBe("300px");
                    expect(el1.factual.height).toBe("300px");
                    expect(el1.element.offsetHeight).toBe(300);

                    // Async Assert
                    expect(el2.movable.height).toBe("400px");
                    expect(el2.factual.height).toBe("400px");
                    expect(el2.element.offsetHeight).toBe(400);
                });

            // Assert
            jasmine.clock().tick(80);
            expect(el1.offsetHeight).toBe(250); 
            expect(el2.offsetHeight).toBe(300); 
            jasmine.clock().tick(80);
            expect(el1.offsetHeight).toBe(300);
            expect(el2.offsetHeight).toBe(400);
            jasmine.clock().tick(16); // One more tick to fire promise resolve
        })
    })
})