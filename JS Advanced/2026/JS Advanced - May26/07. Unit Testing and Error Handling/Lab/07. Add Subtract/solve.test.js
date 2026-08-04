import createCalculator from './solve.js';

import { expect } from 'chai';

describe('createCalculator', () => {
    it('check if init value is 0', function () {
        let calc = createCalculator().get();
        expect(calc).to.equal(0);
    });
    it('check if add(5) results to 5', function () {
        let calc = createCalculator();
        calc.add(5);
        expect(calc.get()).to.equal(5);
    });
    it('check if add-10 sub-3 add-2 results to 9', function () {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(3);
        calc.add(2);
        expect(calc.get()).to.equal(9);
    });
    it('check if it works with both number and string', function () {
        let calc = createCalculator();
        calc.add('5');
        calc.subtract(2);
        calc.add(7);
        calc.subtract('-1');
        calc.subtract(-1);
        expect(calc.get()).to.equal(12);
    });
    it('check if scope works', function () {
        let calc = createCalculator();
        calc.add('5');
        calc.value = 100;
        expect(calc.get()).to.equal(5);
    });
})