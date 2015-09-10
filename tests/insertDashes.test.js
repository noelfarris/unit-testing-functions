'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return error if input is invalid', function() {
		expect(function() {
		expect(functions.insertDashes(1, 2)).to.throw('Invalid input');
		})
	});
	it('should insert dashes between two consecutive letters', function() {
		expect(functions.insertDashes('abba test')).to.equal('a-b-b-a t-e-s-t');
	});
})
