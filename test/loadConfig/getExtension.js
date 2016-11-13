const chai = require('chai');
const expect = chai.expect;
const {getExtension} = require('./../../src/loadConfig')();

describe("getExtension", () => {
	// ===========================================================================
	it("should return json as the default file format", () => {
		expect(getExtension()).to.equal('.json');
	});

	// ===========================================================================
	it("should return the extension name", () => {
		expect(getExtension('test.js')).to.equal('.js');
		expect(getExtension('test.json')).to.equal('.json');
		expect(getExtension('test.html')).to.equal('.html');
	});
});
