'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should throw error if input is invalid', function() {
		expect(function() {
		expect(functions.absVal('1, 2')).to.throw('Invalid input');
		})
	});
	it('should return the absolute value of a number', function() {
		expect(functions.absVal(-10)).to.equal(10);
	})
})