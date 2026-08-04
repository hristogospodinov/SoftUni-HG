import rgbToHexColor from './rgb.js';

import { expect } from 'chai';

describe('rgbToHexColor', () => {
    it('correct result', function () {
        let result = rgbToHexColor(255,255,255);
        expect(result).to.equal('#FFFFFF');
    });
    it('correct result with smaller number', function () {
        let result = rgbToHexColor(15,0,255);
        expect(result).to.equal('#0F00FF');
    });
    it('correct result with smaller numbers', function () {
        let result = rgbToHexColor(10,11,12);
        expect(result).to.equal('#0A0B0C');
    });
    it('wrong type', function () {
        let result = rgbToHexColor(255,255, "1");
        expect(result).to.equal(undefined);
    });
    it('args not 3', function () {
        let result = rgbToHexColor(200,100);
        expect(result).to.equal(undefined);
    });
    it('arg is greater than 255', function () {
        let result = rgbToHexColor(200,100,300);
        expect(result).to.equal(undefined);
    });
    it('arg is less than 0', function () {
        let result = rgbToHexColor(-200,100,100);
        expect(result).to.equal(undefined);
    });
    it('arg is not an int', function () {
        let result = rgbToHexColor(200,100.5,100);
        expect(result).to.equal(undefined);
    });
})