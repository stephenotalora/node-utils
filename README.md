# node-utils
Functional utilities for node

- written in ES6
- requires node 6 and above
- Simplifies common routines while setting up a `node.js` application

### isDevEnv
---------------
- reads from `process.env` and assumes some defaults.
- Ex.
```bash
export NODE_ENV=dev;
```
```javascript
const {isDevEnv} = require('node-utils')();
isDevEnv(); // {isDev: true, env: 'dev'};
```
```javascript
const {isDev} = require('node-utils')();
isDev(); // true
```
```bash
export NODE_ENV=prod;
```
```javascript
const {isDevEnv, isDev} = require('node-utils')();
isDev(); // false
isDevEnv(); // {isDev: false, env: 'prod'};
```

### loadConfig
---------------

- sync - loads a config file from your project directory.

```javascript
const {loadConfig} = require('node-utils')();
loadConfig();
```
   defaults to:

```
Project
│
└─── config
     │
     └─── config-dev (.js|.json)
```

   load from an environment variable
```bash
export NODE_ENV=qa
```

   loads from:
```
Project
│
└─── config
     │
     └─── config-qa (.js|.json)
```

   You can optionally specify additional arguments such as directory path, directory name and file name:
```javascript
loadConfig(__dirname, 'test', 'test-config');
```

   file loads from:
```
Project
│
└─── src
     │
     └─── test
          │
          └─── test-config (.js | .json)
```

1. Note that if you don't specify an extension name the function will default to a `.json` file format.
2. You can require the module in one of two flavours
   ```javascript
   const {loadConfig} = require('node-utils')()
   ```
   or
   ```javascript
   const {loadConfig} = require('node-utils')(__dirname);
   ```
   The former allows you to specify a path individually per function call or bind a path to all subsequent calls.
