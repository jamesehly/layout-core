import { RectElement } from '../../src/elements/RectElement';

describe('RectElement Unit Tests', () => {

    var element: RectElement;

    beforeEach(() => {
        let fixture = `<div id="parent-element" style="height:100px;width:1000px"><div id='rect-element'></div></div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
        element = new RectElement('rect-element');
    })

    afterEach(() => { 
        let el = document.getElementById('parent-element');
        element = null;
        el.remove();
    })

    it('should have the element be an instance of RectElement', () => {
        expect(element instanceof RectElement).toBeTruthy();
    })

    it('should have the same id as the element that it was set with', () => {
        expect(element.id).toBe('rect-element');
    })

    it('should have default properties set on the inital and virtual objects', function() {
        expect(element.virtual.height).toEqual('100%');
        expect(element.virtual.width).toEqual('100%');
        expect(element.virtual.overflow).toEqual('hidden');
        expect(element.initial.height).toEqual('100%');
        expect(element.initial.width).toEqual('100%');
        expect(element.initial.overflow).toEqual('hidden');
    })

    it('should test if the virtual width works with a pixel, percentage and numbers size', () => {
        element.virtual.width = '256';
        element.draw();
        expect(element.width).toBe('256px');
        element.virtual.width = '123px';
        element.draw();
        expect(element.width).toBe('123px');
        element.virtual.width = '25%';
        element.draw();
        expect(element.width).toEqual('250px');
    })

    it('should test if the virtual height works with a pixel, percentage and numbers size', () => {
        element.virtual.height = '256';
        element.draw();
        expect(element.height).toBe('256px');
        element.virtual.height = '123px';
        element.draw();
        expect(element.height).toBe('123px');
        element.virtual.height = '25%';
        element.draw();
        expect(element.height).toEqual('25px');
    })

    it('should do nothing if virtual height is not set', () => {
        element.draw();
        expect(element.height).toBe('100px');
        element.virtual.height = null;
        element.draw();
        expect(element.height).toBe('100px');
        element.virtual.height = undefined;
        element.draw();
        expect(element.height).toBe('100px');
    })

    it('should do nothing if virtual width is not set', () => {
        element.draw();
        expect(element.width).toBe('1000px');
        element.virtual.width = null;
        element.draw();
        expect(element.width).toBe('1000px');
        element.virtual.width = undefined;
        element.draw();
        expect(element.width).toBe('1000px');
    })

    it('should throw if the the width is something fishy', ()=> {
        element.virtual.width = "asdf"
        expect(() => { element.draw() }).toThrow();
    })

    it('should throw if the the height is something fishy', ()=> {
        element.virtual.height = "asdf"
        expect(() => { element.draw() }).toThrow();
    })
})