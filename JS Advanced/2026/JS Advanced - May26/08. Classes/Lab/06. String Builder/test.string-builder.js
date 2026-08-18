import { StringBuilder } from './string-builder.js';
import { expect } from 'chai';

describe('StringBuilder', () => {

    describe('constructor', () => {

        it('should create an empty StringBuilder without argument', () => {
            const builder = new StringBuilder();

            expect(builder.toString()).to.equal('');
        });

        it('should create a StringBuilder with the passed string', () => {
            const builder = new StringBuilder('asd');

            expect(builder.toString()).to.equal('asd');
        });

        it('should throw TypeError when constructor argument is not a string', () => {
            expect(() => new StringBuilder(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

    });

    describe('append()', () => {

        it('should append string to the end', () => {
            const builder = new StringBuilder('hello');

            builder.append(' world');

            expect(builder.toString()).to.equal('hello world');
        });

        it('should append multiple strings in correct order', () => {
            const builder = new StringBuilder('a');

            builder.append('b');
            builder.append('c');
            builder.append('d');

            expect(builder.toString()).to.equal('abcd');
        });

        it('should throw TypeError when append argument is not a string', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.append(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

    });

    describe('prepend()', () => {

        it('should prepend string to the beginning', () => {
            const builder = new StringBuilder('world');

            builder.prepend('hello ');

            expect(builder.toString()).to.equal('hello world');
        });

        it('should prepend multiple strings in correct order', () => {
            const builder = new StringBuilder('c');

            builder.prepend('b');
            builder.prepend('a');

            expect(builder.toString()).to.equal('abc');
        });

        it('should throw TypeError when prepend argument is not a string', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.prepend(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

    });

    describe('insertAt()', () => {

        it('should insert string at the given index', () => {
            const builder = new StringBuilder('hello');

            builder.insertAt('XX', 2);

            expect(builder.toString()).to.equal('heXXllo');
        });

        it('should insert multiple characters at the correct position', () => {
            const builder = new StringBuilder('abcdef');

            builder.insertAt('XYZ', 3);

            expect(builder.toString()).to.equal('abcXYZdef');
        });

        it('should throw TypeError when insertAt argument is not a string', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.insertAt(123, 2))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when constructor argument is not a string', () => {
            expect(() => new StringBuilder(null))
                .to.throw(TypeError, 'Argument must be a string');
        });

    });

    describe('remove()', () => {

        it('should remove the specified number of characters from the given index', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(2, 2);

            expect(builder.toString()).to.equal('abef');
        });

        it('should remove characters from the beginning', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(0, 3);

            expect(builder.toString()).to.equal('def');
        });

        it('should remove characters from the end', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(3, 3);

            expect(builder.toString()).to.equal('abc');
        });

    });

    describe('toString()', () => {

        it('should return the complete string', () => {
            const builder = new StringBuilder('hello');

            builder.append(' world');
            builder.prepend('Say ');

            expect(builder.toString()).to.equal('Say hello world');
        });

        it('should return an empty string for an empty builder', () => {
            const builder = new StringBuilder();

            expect(builder.toString()).to.equal('');
        });

    });

});