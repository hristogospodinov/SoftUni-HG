import isOddOrEven from "./solve.js";

import { expect } from 'chai';

describe('isOddOrEven', () => {
    it('invalid type', function() {
        let result = isOddOrEven(true);
        expect(result).to.equal(undefined);
    });
    it('even', function() {expect(isOddOrEven("this")).to.equal('even');});
    it('odd', function() {expect(isOddOrEven("there")).to.equal('odd');});
    it('rotating result', function() {
        expect(isOddOrEven("")).to.equal('even');
        expect(isOddOrEven("t")).to.equal('odd');
        expect(isOddOrEven("yes ")).to.equal('even');
        expect(isOddOrEven("134")).to.equal('odd');
    });
});
