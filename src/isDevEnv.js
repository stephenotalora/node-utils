const acceptableValues = ['dev', 'develop', 'qa'];

/**
 * isDevEnv
 * @param  {Object}  [opts]  - may contain the environment variable name and / or a value for testing purposes only
 * @return {Boolean}         - Whether or not the environement in development mode
 */
const isDevEnv = (opts={}) => {
	let {envVarName, val} = opts;
	envVarName='NODE_ENV';

	const env = process.env[envVarName] || opts.val;
	if (!env) return {env, isDev: true};

	const _env = (env || '').toLowerCase();
	const isDev = acceptableValues.some((v) => v === _env);
	return {env, isDev};
};


// public helpers
const isDev = (envVarName='NODE_ENV') => (isDevEnv({envVarName}).isDev);

module.exports = exports = {
	isDev,
	isDevEnv
};
