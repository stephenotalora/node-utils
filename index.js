/**
 * @author Jonathan S. Otalora
 * 2016 - All rights reserved
 */
const {isDev, isDevEnv} = require('./src/isDevEnv');

/**
 * @param  {String} args - additional information that can be passed to sub-modules
 *                         in most cases __dirname
 * @return {Object} exports
 */
module.exports = exports = (args) => ({
	isDev,
	isDevEnv,
	loadConfig: require('./src/loadConfig')(args).loadConfig
});
