const ACCEPT_ENV = ['dev', 'develop', 'qa', 'test'];

/**
 * isDevEnv
 * @param  {Object}  [opts]  - may contain the environment variable name and / or a value for testing purposes only
 * @return {Object}          - contains two keys:
 *                             * Whether or not the environement in development mode
 *                             * The value for the environement
 */
const isDevEnv = (opts = {}) => {
	const {envName, val} = opts;
	let targetEnv = envName || 'NODE_ENV';

	// opts.val allow us to overwrite the environmental variable
	// without having to modify the variable, mostly used for testing purposes
	let env = opts.val ? opts.val : process.env[targetEnv];
	if (!env) return {env, isDev: true};

	env = (env || '').toLowerCase();
	const isDev = ACCEPT_ENV.some((v) => v === env);
	return {env, isDev};
};


/**
 * isDev
 * A wrapper with a default to specified the environemnt variable name
 * @param  {String}  [envName='NODE_ENV'] [The environemnt variable name]
 * @return {Boolean}                      Whether or not the environment variable is development mode or not
 */
const isDev = (envName='NODE_ENV') => {
	const {isDev} = isDevEnv({envName});
	return isDev;
};

module.exports = exports = {
	isDevEnv,
	isDev
};
