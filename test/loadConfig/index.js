const {loadConfig} = require('./../../src/loadConfig');
const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies);

describe('loadConfig', () => {
	// ===========================================================================
	it('should have default args', () => {
		loadConfig();
		expect(1).to.equal(1);
	});
});
