'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('splitSwap', function() {
	it('should exist', function() {
		expect(functions.splitSwap).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.splitSwap('string')).to.throw('Invalid input');
		})
	});
	it('should swap two halfs of an array', function() {
		expect(functions.splitSwap([1,2,3,4,5])).to.equal([3,4,5,1,2]);
	});
})