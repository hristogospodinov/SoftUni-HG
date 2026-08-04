import isSymmetric from './solve.js';

import { expect } from 'chai';

describe('isSymmetric', () => {
    it('test for symmetry - positive', function () {
        let result = isSymmetric([1,2,1]);
        expect(result).to.equal(true);
    });
    it('test for symmetry - negative', function () {
        let result = isSymmetric([1,2,3]);
        expect(result).to.equal(false);
    });
    it('test for valid type - negative', () => {
        let result = isSymmetric('yes');
        expect(result).to.equal(false);
    });
    it('test for valid type - negative 2', () => {
        let result = isSymmetric(true);
        expect(result).to.equal(false);
    });
    it('test for symmetry with strings and even count', () => {
        let result = isSymmetric(['a','b','b','a']);
        expect(result).to.equal(true);
    });
    it('test for no symmetry with strings', () => {
        let result = isSymmetric(['a', 'b', 'b', 'r']);
        expect(result).to.equal(false);
    });
    it('test for no symmetry with different types', () => {
        let result = isSymmetric(['1', 1]);
        expect(result).to.equal(false);
    });
    it('input is from blank array', () => {
        let result = isSymmetric([]);
        expect(result).to.equal(true);
    });
})
