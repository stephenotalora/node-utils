/**
 * @author Jonathan S. Otalora
 * 2016 - All rights reserved
 */

/**
 * @param  {String} args - additional information that can be passed to sub-modules
 * @return {Object} exports
 */
module.exports = (args) => ({
	loadConfig: require('./src/loadConfig')(args).loadConfig
});
