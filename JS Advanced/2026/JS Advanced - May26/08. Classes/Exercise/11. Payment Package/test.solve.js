import { PaymentPackage } from './PaymentPackage.js';
import { expect } from 'chai';

describe('PaymentPackage', () => {

    describe('constructor', () => {

        it('should initialize the package correctly', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.name).to.equal('HR Services');
            expect(pack.value).to.equal(1500);
            expect(pack.VAT).to.equal(20);
            expect(pack.active).to.equal(true);
        });

        it('should validate constructor parameters', () => {
            expect(() => new PaymentPackage(123, 1500))
                .to.throw('Name must be a non-empty string');

            expect(() => new PaymentPackage('', 1500))
                .to.throw('Name must be a non-empty string');

            expect(() => new PaymentPackage('HR Services', '1500'))
                .to.throw('Value must be a non-negative number');

            expect(() => new PaymentPackage('HR Services', -1))
                .to.throw('Value must be a non-negative number');
        });
    });

    describe('name', () => {

        it('should have getter and setter', () => {
            const descriptor =
                Object.getOwnPropertyDescriptor(
                    PaymentPackage.prototype,
                    'name'
                );

            expect(descriptor.get).to.be.a('function');
            expect(descriptor.set).to.be.a('function');
        });

        it('should get and set name', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.name).to.equal('HR Services');

            pack.name = 'Consultation';

            expect(pack.name).to.equal('Consultation');
        });

        it('should validate name', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => pack.name = 123)
                .to.throw('Name must be a non-empty string');

            expect(() => pack.name = [])
                .to.throw('Name must be a non-empty string');

            expect(() => pack.name = '')
                .to.throw('Name must be a non-empty string');
        });
    });

    describe('value', () => {

        it('should have getter and setter', () => {
            const descriptor =
                Object.getOwnPropertyDescriptor(
                    PaymentPackage.prototype,
                    'value'
                );

            expect(descriptor.get).to.be.a('function');
            expect(descriptor.set).to.be.a('function');
        });

        it('should get and set value', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.value).to.equal(1500);

            pack.value = 2000;

            expect(pack.value).to.equal(2000);
        });

        it('should validate value', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => pack.value = '1500')
                .to.throw('Value must be a non-negative number');

            expect(() => pack.value = [])
                .to.throw('Value must be a non-negative number');

            expect(() => pack.value = -1)
                .to.throw('Value must be a non-negative number');

            pack.value = 0;
            expect(pack.value).to.equal(0);
        });
    });

    describe('VAT', () => {

        it('should have getter and setter', () => {
            const descriptor =
                Object.getOwnPropertyDescriptor(
                    PaymentPackage.prototype,
                    'VAT'
                );

            expect(descriptor.get).to.be.a('function');
            expect(descriptor.set).to.be.a('function');
        });

        it('should get and set VAT', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.VAT).to.equal(20);

            pack.VAT = 30;

            expect(pack.VAT).to.equal(30);
        });

        it('should validate VAT', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => pack.VAT = '20')
                .to.throw('VAT must be a non-negative number');

            expect(() => pack.VAT = [])
                .to.throw('VAT must be a non-negative number');

            expect(() => pack.VAT = -1)
                .to.throw('VAT must be a non-negative number');

            pack.VAT = 0;
            expect(pack.VAT).to.equal(0);
        });
    });

    describe('active', () => {

        it('should have getter and setter', () => {
            const descriptor =
                Object.getOwnPropertyDescriptor(
                    PaymentPackage.prototype,
                    'active'
                );

            expect(descriptor.get).to.be.a('function');
            expect(descriptor.set).to.be.a('function');
        });

        it('should get and set active', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.active).to.equal(true);

            pack.active = false;
            expect(pack.active).to.equal(false);

            pack.active = true;
            expect(pack.active).to.equal(true);
        });

        it('should validate active', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => pack.active = 'true')
                .to.throw('Active status must be a boolean');

            expect(() => pack.active = [])
                .to.throw('Active status must be a boolean');

            expect(() => pack.active = -1)
                .to.throw('Active status must be a boolean');
        });
    });

    describe('toString()', () => {

        it('should format active package correctly', () => {
            const pack = new PaymentPackage('abc', 123);

            expect(pack.toString()).to.equal(
                'Package: abc\n' +
                '- Value (excl. VAT): 123\n' +
                '- Value (VAT 20%): 147.6'
            );
        });

        it('should use changed VAT', () => {
            const pack = new PaymentPackage('abc', 123);

            pack.VAT = 30;

            expect(pack.toString()).to.equal(
                'Package: abc\n' +
                '- Value (excl. VAT): 123\n' +
                '- Value (VAT 30%): 159.9'
            );
        });

        it('should mark inactive package', () => {
            const pack = new PaymentPackage('abc', 123);

            pack.active = false;

            expect(pack.toString()).to.equal(
                'Package: abc (inactive)\n' +
                '- Value (excl. VAT): 123\n' +
                '- Value (VAT 20%): 147.6'
            );
        });

        it('should combine inactive state and changed VAT', () => {
            const pack = new PaymentPackage('abc', 123);

            pack.VAT = 30;
            pack.active = false;

            expect(pack.toString()).to.equal(
                'Package: abc (inactive)\n' +
                '- Value (excl. VAT): 123\n' +
                '- Value (VAT 30%): 159.9'
            );
        });
    });
});