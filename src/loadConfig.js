'use strict';

const path = require('path');
const rootDir = require("app-root-dir");

exports.loadConfig = (dirPath, dirName='config', fileName='config-') => {
	const {NODE_ENV} = process.env;

	const _env = NODE_ENV && NODE_ENV.length ? NODE_ENV : 'dev';
	const _path = dirPath && dirPath.length ? dirPath : rootDir.get();

	return require(
		path.join(_path, dirName, `${fileName}${_env}`)
	);
};
