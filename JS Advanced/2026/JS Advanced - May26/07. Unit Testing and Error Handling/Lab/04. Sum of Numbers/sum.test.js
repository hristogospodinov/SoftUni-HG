import sum from './solve.js';

import { expect } from 'chai';

describe('sum', function () {
    it('test if [1,2,3] equals 6', function () {
        let result = sum([1,2,3]);
        expect(result).to.equal(6);
    });
    it('test if [] equals 0', function () {
        let result = sum([]);
        expect(result).to.equal(0);
    });
        it('test if [-2,-3] equals -5', function () {
        let result = sum([-2,-3]);
        expect(result).to.equal(-5);
    });
    it('test if [0.1,0.2] equals 0.3', function () {
        let result = sum([0.1,0.2]);
        expect(result).to.be.closeTo(0.3, 0.0001);
    });
    it('test if [-2,0,5,0.1] equals 3.1', function () {
        let result = sum([-2,0,5,0.1]);
        expect(result).to.be.closeTo(3.1, 0.0001);
    });
});