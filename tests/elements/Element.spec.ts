import { Element } from '../../src/elements/Element';
import { VirtualElement } from '../../src/elements/VirtualElement';

export class MockElement extends Element {
    constructor(id: string) {
        super(id);
    }
}

/**
 * Test Element abstract class methods using a MockElement class
 */
describe('Element Unit Tests', () => {

    var element: Element;

    beforeEach(() => {
        let fixture = `
        <div id="parent-element" style="height:100px;width:1000px">
        <div id='mock-element'>
        <div></div>
        <div id='test-child'></div>
        </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
        element = new MockElement('mock-element');
    })

    afterEach(() => {
        let el = document.getElementById('parent-element');
        element = null;
        el.remove();
    })

    it('should setup default properties set on the inital and virtual objects', () => {
        expect(element.virtual.height).toEqual('100%');
        expect(element.virtual.width).toEqual('100%');
        expect(element.virtual.overflow).toEqual('hidden');
        expect(element.initial.height).toEqual('100%');
        expect(element.initial.width).toEqual('100%');
        expect(element.initial.overflow).toEqual('hidden');
    })

    it('should use data-size for a default when setup is called', () => {
        let el = document.getElementById('parent-element');
        el.remove();
        let fixture = `
        <div id="parent-element" style="height:100px;width:1000px">
        <div id='mock-element' data-size="54px">
        <div></div>
        <div id='test-child'></div>
        </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
        element = new MockElement('mock-element');
        expect(element.virtual.height).toEqual('54px');
        expect(element.virtual.width).toEqual('54px');
        expect(element.initial.height).toEqual('54px');
        expect(element.initial.width).toEqual('54px');
    })

    it('should use data-height and data-width when setup is called', () => {
        let el = document.getElementById('parent-element');
        el.remove();
        let fixture = `
        <div id="parent-element" style="height:100px;width:1000px">
        <div id='mock-element' data-height="512px" data-width="256px">
        <div></div>
        <div id='test-child'></div>
        </div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
        element = new MockElement('mock-element');
        expect(element.virtual.height).toEqual('512px');
        expect(element.virtual.width).toEqual('256px');
        expect(element.initial.height).toEqual('512px');
        expect(element.initial.width).toEqual('256px');
    })

    it('should get the element', () => {
        let el = element.get();
        expect(el.id).toBe('mock-element');
    })

    it('should get the element with the element getter', () => {
        expect(element.element.id).toBe('mock-element');
    })

    it('should get the virtual element with the virtual getter', () => {
        expect(element.virtual instanceof VirtualElement).toBeTruthy();
    })

    it('should get the initial element with the initial getter', () => {
        expect(element.initial instanceof VirtualElement).toBeTruthy();
    })

    it('should get the factual element with the factual getter', () => {
        expect(element.factual instanceof VirtualElement).toBeTruthy();
    })

    it('should get the movable element with the movable getter', () => {
        expect(element.movable instanceof VirtualElement).toBeTruthy();
    })

    it('should get the children of the element as an array of HTMLElements', () => {
        expect(element.children instanceof Array).toBeTruthy();
        expect(element.children[0] instanceof HTMLElement).toBeTruthy();
    })

    it('should have the correct children length', () => {
        expect(element.children.length).toBe(2);
    })

    it('should set the ids of children without an id set', () => {
        expect(element.children[0].id).toBe('mock-element-child-0');
        expect(element.children[1].id).toBe('test-child');
    })

    it('should return the element id', () => {
        expect(element.id).toBe('mock-element');
    })

    it('should return the element height', () => {
        expect(element.height).toBe('0px');
    })

    it('should set the element height and the factual height', () => {
        element.height = "100px";
        expect(element.height).toBe('100px');
        expect(element.factual.height).toBe('100px');
    })

    it('should return the element width', () => {
        expect(element.width).toBe('1000px');
    })

    it('should set the element width and the factual width', () => {
        element.width = "101px";
        expect(element.width).toBe('101px');
        expect(element.factual.width).toBe('101px');
    })

    it('should return the overflow with the overflow getter', () => {
        // Actual overflow is nothing by default
        expect(element.overflow).toBe('');
        element.draw();
        // After drawing it is hidden by default
        expect(element.overflow).toBe('hidden');
    })

    it('should draw the element overflow to all possible css overflow values', () => {
        element.virtual.overflow = "visible";
        element.draw();
        expect(element.overflow).toBe('visible');
        element.virtual.overflow = "hidden";
        element.draw();
        expect(element.overflow).toBe('hidden');
        element.virtual.overflow = "scroll";
        element.draw();
        expect(element.overflow).toBe('scroll');
        element.virtual.overflow = "auto";
        element.draw();
        expect(element.overflow).toBe('auto');
        element.virtual.overflow = "inherit";
        element.draw();
        expect(element.overflow).toBe('inherit');
        element.virtual.overflow = "initial";
        element.draw();
        expect(element.overflow).toBe('initial');
        element.virtual.overflow = "unset";
        element.draw();
        expect(element.overflow).toBe('unset');
    })

    it('should throw on an overflow value that is not a official value', () => {
        element.virtual.overflow = "asdf"
        expect(() => { element.draw() }).toThrow();
    })

    it('should do nothing if virtual.overflow is not set', () => {
        element.virtual.overflow = 'visible';
        element.draw();
        element.virtual.overflow = null;
        element.draw();
        expect(element.virtual.overflow).toBe(null);
        expect(element.overflow).toBe('visible');
        element.virtual.overflow = undefined;
        element.draw();
        expect(element.virtual.overflow).toBe(undefined);
        expect(element.overflow).toBe('visible');
    })

    it('should return the float with the float getter', () => {
        // Actual overflow is nothing by default
        expect(element.float).toBe('');
        element.draw();
        // After drawing it is nothing by default
        expect(element.float).toBe('');
    })

    it('should draw the element float to all possible css float values', () => {
        element.virtual.float = "left";
        element.draw();
        expect(element.float).toBe('left');
        element.virtual.float = "right";
        element.draw();
        expect(element.float).toBe('right');
        element.virtual.float = "none";
        element.draw();
        expect(element.float).toBe('none');
        element.virtual.float = "inherit";
        element.draw();
        expect(element.float).toBe('inherit');
        element.virtual.float = "initial";
        element.draw();
        expect(element.float).toBe('initial');
    })

    it('should throw on an float value that is not a official value', () => {
        element.virtual.float = "asdf"
        expect(() => { element.draw() }).toThrow();
    })
})