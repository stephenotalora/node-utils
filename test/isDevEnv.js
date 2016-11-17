const {expect} = require('chai');
const {isDev, isDevEnv} = require('./../src/isDevEnv');

describe("isDevEnv", () => {
	// ===========================================================================
	it("should return an object with two keys", () => {
		const result = isDevEnv();

		expect(Object.keys(result).length).to.equal(2);
		expect(isDevEnv()).to.have.deep.property('isDev', true);
		expect(isDevEnv()).to.have.deep.property('env', undefined);
	});

	// ===========================================================================
	it("should be truthy", () => {
		expect(isDev()).to.be.true;
		expect(isDevEnv().isDev).to.be.true;
		expect(isDevEnv({val:'qa'}).isDev).to.be.true;
		expect(isDevEnv({val:'dev'}).isDev).to.be.true;
		expect(isDevEnv({val:'DEV'}).isDev).to.be.true;
		expect(isDevEnv({val:'develop'}).isDev).to.be.true;
	});

	// ===========================================================================
	it("should be falsy", () => {
		expect(isDevEnv({val: 'prod'}).isDev).to.be.false;
		expect(isDevEnv({val: 'production'}).isDev).to.be.false;
	});
});
