'use strict';

const fs = require('fs');
const {join, resolve} = require('path');
const rootDir = require("app-root-dir");

const regex = /\./;

const getExtension = (extension) => {
	const l = Boolean(extension && extension.length) ? extension.length : 0;

	if (l <= 1) return 'json';
	return extension[l - 1];
};

const loadConfig = (path, dir, fileName) => {
	const {NODE_ENV} = process.env;

	// get environment variable and filename
	const _env = NODE_ENV && NODE_ENV.length ? NODE_ENV : 'dev';
	const _fileName = fileName && fileName.length ? fileName : `config-${_env}`;

	// resolve full path
	const _ext = _fileName.split(regex);
	const _dir = dir && dir.length ? dir : 'config';
	const _path = path && path.length ? path : rootDir.get();
	const _fullPath = join(resolve(_path, _dir), _fileName);

	// Validate path and throw custom error if path not found
	if (!fs.existsSync(`${_fullPath}.${getExtension(_ext)}`)) {
		throw new Error('Path not found');
	}

	// otherwise we can require the file with an absolute path
	return require(_fullPath);
};

module.exports = {
	getExtension,
	loadConfig
};
