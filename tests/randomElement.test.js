'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return a value that is in the array', function() {
		expect(functions.randomElement['string', 1, 3]).to.equal(functions.randomElement[0] || functions.randomElement[1] || functions.randomElement[2]);
	})
})