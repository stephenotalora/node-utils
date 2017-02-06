const {loadConfig} = require('./../../src/loadConfig')(__dirname);

describe('loadConfig', () => {
	const mock = {test: 'test'};

	// ===========================================================================
	it("should throw if it can't find the config file", () => {
		expect(loadConfig).toThrowError("Path not found");
	});

	// ===========================================================================
	it("should load a config file based on its arguements", () => {
		expect(
			loadConfig('./../mocks', 'test')
		).toEqual(mock);
	});

	// ===========================================================================
	it("should load a deeply nested file and fall back to a default file name", () => {
		expect(
			loadConfig('./../mocks/config/test/')
		).toEqual(mock);
	});

	// ===========================================================================
	it("can take three args", () => {
		const config = {loadConfig};
		const spy = spyOn(config, 'loadConfig').and.callThrough();
		const result = config.loadConfig('./../mocks/', 'test');

		expect(spy).toHaveBeenCalledWith('./../mocks/', 'test');
		expect(result).toEqual(mock);
	});
});
