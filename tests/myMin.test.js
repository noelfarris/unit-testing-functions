'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.myMin('string')).to.throw('Invalid input');
		})
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.myMin(1, 2, 3)).to.throw('Invalid input');
		})
	});
	it('should return the smaller of two intergers', function() {
		expect(functions.myMin(3, 4)).to.equal(3);
	})
})