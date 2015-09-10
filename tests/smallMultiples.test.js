'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('smallMultiples', function() {
	it('should exist', function() {
		expect(functions.smallMultiples).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.smallMultiples('string')).to.throw('Invalid input');
		})
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.smallMultiples([1, 4])).to.throw('Invalid input');
		})
	});
	it('should return the count of the multiples of k that are not greater than n', function() {
		expect(functions.smallMultiples(4, 1)).to.equal(3);
	});
})