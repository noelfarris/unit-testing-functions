'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.fixProperNoun(1, 2)).to.throw('Invalid input');
		})
	});
	it('Should capitalize only first letter of a noun', function() {
		expect(functions.fixProperNoun('caTs')).to.equal('Cats');
	})	
})