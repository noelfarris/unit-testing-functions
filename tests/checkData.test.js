'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true if the input length is "abc"', function() {
		expect(functions.checkData("abc")).to.be.true;
	})
	it('should return false if the input length is "abcd"', function() {
		expect(functions.checkData("abcd")).to.be.false;
	})
	it('should throw an excepton if the input is an array', function() {
		expect(function() {
			functions.checkData(['a']).to.throw('Invalid input');
		})
	})
});