'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return error if input is invalid', function() {
		expect(function() {
		expect(functions.mySubstring(1, 2)).to.throw('Invalid input');
		})
	});
	it('should output the substring of a given string', function() {
		expect(functions.mySubstring('abcde', 2, 3)).to.equal('cd');
	});
})