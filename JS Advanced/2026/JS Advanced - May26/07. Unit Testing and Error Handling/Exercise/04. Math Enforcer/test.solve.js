import mathEnforcer from "./solve.js";

import { expect } from "chai";

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('string -> undefined', () => {
            expect(mathEnforcer.addFive('hello')).to.equal(undefined);
        });
        it('more undefined', () => {
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });
        it('positive - correct result', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
        });
        it('negative - correct result', () => {
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
        });
        it('adding 0', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it('floating - correct result with closeTo', () => {
            expect(mathEnforcer.addFive(6.1)).to.be.closeTo(11.1,0.01);
            expect(mathEnforcer.addFive(-6.1)).to.be.closeTo(-1.1, 0.01);
        });
    });
    describe('subtractTen', () => {
        it('invalid type', () => {
            expect(mathEnforcer.subtractTen('minus')).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });
        it('positive - correct result', () => {
            expect(mathEnforcer.subtractTen(22)).to.equal(12);
        });
        it('using 0', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it('negative - correct result', () => {
            expect(mathEnforcer.subtractTen(6)).to.equal(-4);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it('floating - correct negative and positive', () => {
            expect(mathEnforcer.subtractTen(0.1)).to.be.closeTo(-9.9,0.01);
            expect(mathEnforcer.subtractTen(-0.6)).to.be.closeTo(-10.6,0.01);
        });
    });
    describe('sum', () => {
        it('invalid num1', () => {
            expect(mathEnforcer.sum("tt",2)).to.equal(undefined);
            expect(mathEnforcer.sum("",12)).to.equal(undefined);
        });
        it('invalid num2', () => {
            expect(mathEnforcer.sum(2,"tt")).to.equal(undefined);
            expect(mathEnforcer.sum(12,"")).to.equal(undefined);
        });
        it('two positive nums', () => {
            expect(mathEnforcer.sum(1,2)).to.equal(3);
            expect(mathEnforcer.sum(10,22)).to.equal(32);
        });
        it('two negative nums', () => {
            expect(mathEnforcer.sum(-1,-2)).to.equal(-3);
            expect(mathEnforcer.sum(-5,-100)).to.equal(-105);
        });
        it('negative and positive', () => {
            expect(mathEnforcer.sum(1,-2)).to.equal(-1);
            expect(mathEnforcer.sum(100,-5)).to.equal(95);
        });
        it('floating point', () => {
            expect(mathEnforcer.sum(3,5.5)).to.be.closeTo(8.5,0.01);
            expect(mathEnforcer.sum(3,-5.5)).to.be.closeTo(-2.5,0.01);
            expect(mathEnforcer.sum(2.2, 3.3)).to.be.closeTo(5.5, 0.01);
            expect(mathEnforcer.sum(-2.2, -3.3)).to.be.closeTo(-5.5, 0.01);
        });
        it('more invalid', () => {
            expect(mathEnforcer.sum(true, 2)).to.equal(undefined);
            expect(mathEnforcer.sum(2, true)).to.equal(undefined);
        });
        it('0 + 0', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });
    });    
});