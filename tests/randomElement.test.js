'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return a value that is in the array', function() {
		expect(functions.randomElement(['string', 1])).to.equal('string');
	})
})