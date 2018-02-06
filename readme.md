#### Environment details

  - OS: macOS 10.12.6
  - Node.js version: 6.11.5 via nvm
  - npm version: 3.10.10
  - @google-cloud/functions-emulator version: 1.0.0-alpha.29

#### Steps to reproduce

  1. clone https://github.com/irons/datastore-crasher
  2. npm install
  3. `functions-emulator deploy datastore_crasher --trigger-http`

Here's what I get: 

```
Copying file:///var/folders/bj/nhgswvns5nvg50_xvh58xzxw0000gn/T/us-central1-datastore_crasher-39261vpMSj7lG4Xfe.zip...
Waiting for operation to finish...done.
Deploying function.......failed.
ERROR: Function worker crashed with exit code: 1
undefinedmodule.js:487
    throw err;
    ^

Error: Cannot find module '/Users/irons/Documents/code/cloud-functions/datastore-crasher/node_modules/grpc/src/node/extension_binary/node-v57-darwin-x64-unknown/grpc_node.node'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/irons/Documents/code/cloud-functions/datastore-crasher/node_modules/grpc/src/grpc_extension.js:30:15)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
```

If I comment out `const Datastore = require('@google-cloud/datastore');` from index.js, I can deploy successfully. 

I can deploy successfully to Cloud Functions; it's only the emulator that's crashing.
