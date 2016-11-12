# node-utils
Functional utilities for node
- written in ES6
- requires node 6 and above
- Simplifies common routines while setting up a `node.js` application

### loadConfig
- sync - loads a config file from your application directory.

   load a config file from a config directory

```javascript
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

...loads from:
```
Project
│
└─── config
     │
     └─── config-qa (.js|.json)
```

   You can optionally specify additional arguments such as directory path, directory name and file name:
```javascript
loadConfig('./src', 'test', 'test-config');
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
