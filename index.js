/**
 * @author Jonathan S. Otalora
 * 2016 - All rights reserved
 */

/**
 * @param  {String} args - additional information that can be passed to sub-modules
 *                         in most cases __dirname
 * @return {Object} exports
 */
module.exports = exports = (args) => ({
	loadConfig: require('./src/loadConfig')(args).loadConfig
	isDevEnv: require('./src/isDevEnv')
});
