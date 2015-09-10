'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.sumSquares('string')).to.throw('Invalid input');
		})
	});
	it('should return the sum of squres for a group of integers', function() {
		expect(functions.sumSquares(5)).to.equal(55);
	});
})