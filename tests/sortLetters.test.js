'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.sortLetters(1, 2)).to.throw('Invalid input');
		})
	});
	it('should return string in alphabetical order', function() {
		expect(functions.sortLetters('fedcba')).to.equal('abcdef');
	})
})