const {getExtension} = require('./../../src/loadConfig')();

describe("getExtension", () => {
	// ===========================================================================
	it("should return json as the default file format", () => {
		expect(getExtension()).toEqual('.json');
	});

	// ===========================================================================
	it("should return the extension name", () => {
		expect(getExtension('test.js')).toEqual('.js');
		expect(getExtension('test.json')).toEqual('.json');
		expect(getExtension('test.html')).toEqual('.html');
	});
});
