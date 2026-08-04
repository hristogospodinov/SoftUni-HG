import lookupChar from "./solve.js";

import { expect } from "chai";

describe('lookupChar', () => {
    it('returning undefined', () => {
        expect(lookupChar(3,'test')).to.equal(undefined);
        expect(lookupChar(true, 5)).to.equal(undefined);
        expect(lookupChar('yes')).to.equal(undefined);
    });
    it('returning Incorrect index', () => {
        expect(lookupChar('', 2)).to.equal('Incorrect index');
        expect(lookupChar('test', -2)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    });
    it('successful test', () => {
        expect(lookupChar('test', 2)).to.equal('s');
    });
    it('decimal index -> undefined', () => {
        expect(lookupChar('test', 2.3)).to.equal(undefined);
    });
});