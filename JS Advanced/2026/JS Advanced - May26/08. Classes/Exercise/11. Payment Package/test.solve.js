import { PaymentPackage } from './PaymentPackage.js';
import { expect } from 'chai';

describe('PaymentPackage', () => {

    describe('constructor', () => {

        it('should initialize name', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.name).to.equal('HR Services');
        });

        it('should initialize value', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.value).to.equal(1500);
        });

        it('should set default VAT to 20', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.VAT).to.equal(20);
        });

        it('should set default active to true', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.active).to.equal(true);
        });

        it('should throw when constructor name is empty', () => {
            expect(() => new PaymentPackage('', 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when constructor name is not a string', () => {
            expect(() => new PaymentPackage(123, 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when constructor name is null', () => {
            expect(() => new PaymentPackage(null, 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when constructor name is undefined', () => {
            expect(() => new PaymentPackage(undefined, 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when constructor value is undefined', () => {
            expect(() => new PaymentPackage('HR Services'))
                .to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw when constructor value is a string', () => {
            expect(() => new PaymentPackage('HR Services', '1500'))
                .to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw when constructor value is negative', () => {
            expect(() => new PaymentPackage('HR Services', -1))
                .to.throw(Error, 'Value must be a non-negative number');
        });

        it('should allow zero as value', () => {
            const pack = new PaymentPackage('HR Services', 0);

            expect(pack.value).to.equal(0);
        });
    });

    describe('name getter/setter', () => {

        it('should get the current name', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.name).to.equal('HR Services');
        });

        it('should set a new name', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.name = 'Consultation';

            expect(pack.name).to.equal('Consultation');
        });

        it('should throw when name is empty', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.name = '';
            }).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when name is a number', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.name = 123;
            }).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when name is null', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.name = null;
            }).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw when name is undefined', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.name = undefined;
            }).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should preserve the previous name after invalid assignment', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.name = '';
            }).to.throw();

            expect(pack.name).to.equal('HR Services');
        });
    });

    describe('value getter/setter', () => {

        it('should get the current value', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.value).to.equal(1500);
        });

        it('should set a new value', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.value = 2000;

            expect(pack.value).to.equal(2000);
        });

        it('should allow zero', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.value = 0;

            expect(pack.value).to.equal(0);
        });

        it('should throw when value is negative', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.value = -1;
            }).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw when value is a string', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.value = '1500';
            }).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw when value is null', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.value = null;
            }).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should preserve the previous value after invalid assignment', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.value = -100;
            }).to.throw();

            expect(pack.value).to.equal(1500);
        });
    });

    describe('VAT getter/setter', () => {

        it('should get the default VAT', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.VAT).to.equal(20);
        });

        it('should set VAT', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.VAT = 15;

            expect(pack.VAT).to.equal(15);
        });

        it('should allow zero VAT', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.VAT = 0;

            expect(pack.VAT).to.equal(0);
        });

        it('should throw when VAT is negative', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.VAT = -1;
            }).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should throw when VAT is a string', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.VAT = '20';
            }).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should throw when VAT is null', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.VAT = null;
            }).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should preserve previous VAT after invalid assignment', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.VAT = -10;
            }).to.throw();

            expect(pack.VAT).to.equal(20);
        });
    });

    describe('active getter/setter', () => {

        it('should be active by default', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.active).to.equal(true);
        });

        it('should set active to false', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.active = false;

            expect(pack.active).to.equal(false);
        });

        it('should set active back to true', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.active = false;
            pack.active = true;

            expect(pack.active).to.equal(true);
        });

        it('should throw when active is null', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.active = null;
            }).to.throw(Error, 'Active status must be a boolean');
        });

        it('should throw when active is a string', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.active = 'true';
            }).to.throw(Error, 'Active status must be a boolean');
        });

        it('should throw when active is a number', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.active = 1;
            }).to.throw(Error, 'Active status must be a boolean');
        });

        it('should preserve active status after invalid assignment', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(() => {
                pack.active = null;
            }).to.throw();

            expect(pack.active).to.equal(true);
        });
    });

    describe('toString()', () => {

        it('should format an active package correctly', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            expect(pack.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value   (excl. VAT): 1500\n' +
                '- Value   (VAT 20%): 1800'
            );
        });

        it('should add inactive label when package is inactive', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.active = false;

            expect(pack.toString()).to.equal(
                'Package: HR Services (inactive)\n' +
                '- Value   (excl. VAT): 1500\n' +
                '- Value   (VAT 20%): 1800'
            );
        });

        it('should remove inactive label when package becomes active', () => {
            const pack = new PaymentPackage('HR Services', 1500);

            pack.active = false;
            pack.active = true;

            expect(pack.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value   (excl. VAT): 1500\n' +
                '- Value   (VAT 20%): 1800'
            );
        });

        it('should calculate VAT correctly', () => {
            const pack = new PaymentPackage('HR Services', 1000);

            expect(pack.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value   (excl. VAT): 1000\n' +
                '- Value   (VAT 20%): 1200'
            );
        });

        it('should use changed VAT', () => {
            const pack = new PaymentPackage('HR Services', 1000);

            pack.VAT = 10;

            expect(pack.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value   (excl. VAT): 1000\n' +
                '- Value   (VAT 10%): 1100'
            );
        });

        it('should use changed value', () => {
            const pack = new PaymentPackage('HR Services', 1000);

            pack.value = 2000;

            expect(pack.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value   (excl. VAT): 2000\n' +
                '- Value   (VAT 20%): 2400'
            );
        });

        it('should use changed name', () => {
            const pack = new PaymentPackage('HR Services', 1000);

            pack.name = 'Consultation';

            expect(pack.toString()).to.equal(
                'Package: Consultation\n' +
                '- Value   (excl. VAT): 1000\n' +
                '- Value   (VAT 20%): 1200'
            );
        });

        it('should reflect all changed properties', () => {
            const pack = new PaymentPackage('HR Services', 1000);

            pack.name = 'Consultation';
            pack.value = 2000;
            pack.VAT = 10;
            pack.active = false;

            expect(pack.toString()).to.equal(
                'Package: Consultation (inactive)\n' +
                '- Value   (excl. VAT): 2000\n' +
                '- Value   (VAT 10%): 2200'
            );
        });
    });
});