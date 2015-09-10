'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('derot13', function() {
	it('should exist', function() {
		expect(functions.rot13).not.to.be.undefined;
	});
	it('should return error if input is invalid', function() {
		expect(function() {
		expect(functions.derot13('1')).to.throw('Invalid input');
		})
	});
	it('should return error if input is invalid', function() {
		expect(function() {
		expect(functions.derot13(1)).to.throw('Invalid input');
		})
	});
	it('should return error if input is invalid', function() {
		expect(function() {
		expect(functions.derot13(HeLLo)).to.throw('Invalid input');
		})
	});
	it('should take an encrypted string and return the rot13', function() {
		expect(functions.derot13('uryyb')).to.equal('hello');
	});
})