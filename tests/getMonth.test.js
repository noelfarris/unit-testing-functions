'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.getMonth('string')).to.throw('Invalid input');
		})
	})
	it('should return false if input is invalid', function() {
		expect(function() {
		expect(functions.getMonth([4])).to.throw('Invalid input');
		})
	})
	it('should return month of corosponding integer', function() {
		expect(functions.getMonth(3)).to.equal('March');
	})
});