'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.myMax('string')).to.throw('Invalid input');
		})
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.myMax(1, 2)).to.throw('Invalid input');
		})
	});
	it('should return the smaller of two intergers', function() {
		expect(functions.myMax([3, 4, 6])).to.equal(6);
	})
})