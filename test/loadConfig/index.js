const chai = require('chai');
const spies = require('chai-spies');
const {loadConfig} = require('./../../src/loadConfig');

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
			loadConfig(__dirname, './../mocks', 'test')
		).to.deep.equal(mock);
	});

	// ===========================================================================
	it("should load a deeply nested file and fall back to a default file name", () => {
		expect(
			loadConfig(__dirname,'./../mocks/config/test/')
		).to.deep.equal(mock);
	});

	// ===========================================================================
	it("can take three args", () => {
		const config = {loadConfig};
		const spy = chai.spy.on(config, 'loadConfig');
		const result = config.loadConfig(__dirname, './../mocks/', 'test');

		expect(spy).to.have.been.called.with(__dirname, './../mocks/', 'test');
		expect(result).to.deep.equal(mock);
	});
});
