const chai = require('chai');
const spies = require('chai-spies');
const {loadConfig} = require('./../../src/loadConfig')(__dirname);

const expect = chai.expect;
chai.use(spies);

describe('loadConfig', () => {
	const mock = {test: 'test'};

	// ===========================================================================
	it("should throw if it can't find the config file", () => {
		expect(loadConfig).to.throw("Path not found");
	});

	// ===========================================================================
	it("should load a config file based on its arguements", () => {
		expect(
			loadConfig('./../mocks', 'test')
		).to.deep.equal(mock);
	});

	// ===========================================================================
	it("should load a deeply nested file and fall back to a default file name", () => {
		expect(
			loadConfig('./../mocks/config/test/')
		).to.deep.equal(mock);
	});

	// ===========================================================================
	it("can take three args", () => {
		const config = {loadConfig};
		const spy = chai.spy.on(config, 'loadConfig');
		const result = config.loadConfig('./../mocks/', 'test');

		expect(spy).to.have.been.called.with('./../mocks/', 'test');
		expect(result).to.deep.equal(mock);
	});
});
