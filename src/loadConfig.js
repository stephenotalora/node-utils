'use strict';

const fs = require('fs');
const {extname, join, resolve} = require('path');

const pat = /\./;

/**
 * getExtension
 * @param  {String} fileName - filename and corresponding extension if one doesn't exists fallsback to .json
 * @return {String} The file extension
 */
const getExtension = (fileName) => {
	if (!fileName || !fileName.length || !pat.test(fileName)) return '.json'
	return extname(fileName);
};

/**
 * loadConfig
 * loads the configuration file Synchronously
 * @param  {String} path     - path to overwrrite usually __dirname if one provided
 * @param  {String} dir      - the target directory
 * @param  {String} fileName - the name of the file that needs to be loaded into memory
 * @return {Object}          The required filed
 */
const loadConfig = (path = '', dir, fileName) => {
	const {NODE_ENV} = process.env;

	// get environmental variable and filename
	const env = NODE_ENV && NODE_ENV.length ? NODE_ENV : 'dev';
	const file = fileName && fileName.length ? fileName : `config-${env}`;

	// resolve full path
	const extension = getExtension(file);
	const directory = dir && dir.length ? dir : 'config';
	const fullPath = join(resolve(path, directory), file);

	// Validate path and throw custom error if path not found
	if (!fs.existsSync(`${fullPath}${extension}`)) {
		throw new Error('Path not found');
	}

	// otherwise we can require the file with an absolute path
	return require(fullPath);
};

module.exports = exports = (dirname) => {
	const _loadConfig = dirname && dirname.length ? loadConfig.bind(null, dirname) : loadConfig

	return {
		getExtension,
		loadConfig: _loadConfig
	}
};
