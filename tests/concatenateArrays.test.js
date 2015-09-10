'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should return false if input is not an array', function() {
		expect(function() {
		expect(functions.concatenateArrays(1, 2)).to.throw('Invalid input');
		})
	});
	it('should return one array', function() {
		expect(functions.concatenateArrays([1],[2])).to.deep.equal([ 1, 2 ]);
	})
})