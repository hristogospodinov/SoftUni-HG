const sum = require('./solve.js');

const { expect } = require('chai');

describe('sum', function () {
    it('test if [1,2,3] equals 6', function () {
        let result = sum([1,2,3]);
        expect(result).to.equal(6);
    });
});