'use strict';

const fs = require('fs');
const {extname, join, resolve} = require('path');
const rootDir = require("app-root-dir");

const regex = /\./;

const getExtension = (fileName) => {
	if (!fileName || !fileName.length || !regex.test(fileName)) return '.json'
	return extname(fileName);
};

const loadConfig = (path, dir, fileName) => {
	const {NODE_ENV} = process.env;

	// get environment variable and filename
	const _env = NODE_ENV && NODE_ENV.length ? NODE_ENV : 'dev';
	const _fileName = fileName && fileName.length ? fileName : `config-${_env}`;

	// resolve full path
	const _ext = getExtension(fileName);
	const _dir = dir && dir.length ? dir : 'config';
	const _path = path && path.length ? path : rootDir.get();
	const _fullPath = join(resolve(_path, _dir), _fileName);

	// Validate path and throw custom error if path not found
	if (!fs.existsSync(`${_fullPath}${_ext}`)) {
		throw new Error('Path not found');
	}

	// otherwise we can require the file with an absolute path
	return require(_fullPath);
};

module.exports = (dirname) => {
	const _loadConfig = dirname && dirname.length ? loadConfig.bind(null, dirname) : loadConfig

	return {
		getExtension,
		loadConfig: _loadConfig
	}
};
