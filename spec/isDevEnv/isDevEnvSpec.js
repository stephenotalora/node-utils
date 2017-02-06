const {isDev, isDevEnv} = require('./../../src/isDevEnv');

describe("isDevEnv", () => {
	// ===========================================================================
	it("should return an object with two keys", () => {
		const result = isDevEnv();

		expect(Object.keys(result).length).toEqual(2);
		expect(result).toEqual(jasmine.objectContaining({isDev: true}));
	});

	// ===========================================================================
	it("should be truthy", () => {
		expect(isDev()).toBeTruthy();;
		expect(isDevEnv().isDev).toBeTruthy();
		expect(isDevEnv({val:'qa'}).isDev).toBeTruthy();
		expect(isDevEnv({val:'dev'}).isDev).toBeTruthy();
		expect(isDevEnv({val:'DEV'}).isDev).toBeTruthy();
		expect(isDevEnv({val:'develop'}).isDev).toBeTruthy();
	});

	// ===========================================================================
	it("should be falsy", () => {
		expect(isDevEnv({val: 'prod'}).isDev).toBeFalsy();
		expect(isDevEnv({val: 'production'}).isDev).toBeFalsy();
	});
});
