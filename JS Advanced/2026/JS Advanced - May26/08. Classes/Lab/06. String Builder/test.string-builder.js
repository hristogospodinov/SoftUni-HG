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

        it('should throw TypeError for non-string constructor argument - number', () => {
            expect(() => new StringBuilder(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError for non-string constructor argument - null', () => {
            expect(() => new StringBuilder(null))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError for non-string constructor argument - object', () => {
            expect(() => new StringBuilder({}))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError for non-string constructor argument - array', () => {
            expect(() => new StringBuilder([]))
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

        it('should append an empty string without changing the content', () => {
            const builder = new StringBuilder('hello');

            builder.append('');

            expect(builder.toString()).to.equal('hello');
        });

        it('should append to an empty StringBuilder', () => {
            const builder = new StringBuilder();

            builder.append('hello');

            expect(builder.toString()).to.equal('hello');
        });

        it('should throw TypeError when append argument is a number', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.append(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when append argument is null', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.append(null))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when append argument is an object', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.append({}))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when append argument is an array', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.append([]))
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

        it('should prepend an empty string without changing the content', () => {
            const builder = new StringBuilder('hello');

            builder.prepend('');

            expect(builder.toString()).to.equal('hello');
        });

        it('should prepend to an empty StringBuilder', () => {
            const builder = new StringBuilder();

            builder.prepend('hello');

            expect(builder.toString()).to.equal('hello');
        });

        it('should throw TypeError when prepend argument is a number', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.prepend(123))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when prepend argument is null', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.prepend(null))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when prepend argument is an object', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.prepend({}))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when prepend argument is an array', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.prepend([]))
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

        it('should insert an empty string without changing the content', () => {
            const builder = new StringBuilder('hello');

            builder.insertAt('', 2);

            expect(builder.toString()).to.equal('hello');
        });

        it('should insert at index 0', () => {
            const builder = new StringBuilder('hello');

            builder.insertAt('XX', 0);

            expect(builder.toString()).to.equal('XXhello');
        });

        it('should insert at the end of the string', () => {
            const builder = new StringBuilder('hello');

            builder.insertAt('XX', 5);

            expect(builder.toString()).to.equal('helloXX');
        });

        it('should throw TypeError when insertAt argument is a number', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.insertAt(123, 2))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when insertAt argument is null', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.insertAt(null, 2))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when insertAt argument is an object', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.insertAt({}, 2))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw TypeError when insertAt argument is an array', () => {
            const builder = new StringBuilder('hello');

            expect(() => builder.insertAt([], 2))
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

        it('should not change the content when length is zero', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(2, 0);

            expect(builder.toString()).to.equal('abcdef');
        });

        it('should remove one character correctly', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(2, 1);

            expect(builder.toString()).to.equal('abdef');
        });

        it('should remove the entire string', () => {
            const builder = new StringBuilder('abcdef');

            builder.remove(0, 6);

            expect(builder.toString()).to.equal('');
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

        it('should return the updated content after multiple operations', () => {
            const builder = new StringBuilder('hello');

            builder.append(', there');
            builder.prepend('User, ');
            builder.insertAt('woop', 5);
            builder.remove(6, 3);

            expect(builder.toString()).to.equal('User,w hello, there');
        });

    });

});