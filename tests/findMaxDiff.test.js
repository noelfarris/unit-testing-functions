'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.findMaxDiff('string')).to.throw('Invalid input');
		})
	});
	it('should return the maximum difference between two intergers', function() {
		expect(functions.findMaxDiff([1, 15, 5, 4])).to.equal(14);
	});
})