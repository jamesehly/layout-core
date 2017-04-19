import { FillElement } from '../../src/elements/FillElement';

describe('FillElement Unit Tests', function () {

    var element;

    beforeEach(function () {
        let fixture = `<div id="parent-element" style="height:512px;width:1024px"><div id='fill-element'></div></div>`;
        document.body.insertAdjacentHTML('afterbegin', fixture);
        element = new FillElement('fill-element');
    })

    afterEach(function() { 
        let el = document.getElementById('parent-element');
        element = null;
        el.remove();
    })

    it('should have the element be an instance of FillElement', function () {
        expect(element instanceof FillElement).toBeTruthy();
    })

    it('should have the same id as the element that it was set with', function () {
        expect(element.id).toBe('fill-element');
    })

    it('should have default properties set on the inital and virtual objects', function() {
        expect(element.virtual.height).toEqual('100%');
        expect(element.virtual.width).toEqual('100%');
        expect(element.virtual.overflow).toEqual('hidden');

        expect(element.initial.height).toEqual('100%');
        expect(element.initial.width).toEqual('100%');
        expect(element.initial.overflow).toEqual('hidden');
    })

    it('it should resize itself to its parent width and height when draw is called', function () {
        element.draw();
        expect(element.height).toBe('512px');
        expect(element.width).toBe('1024px');
    })
})