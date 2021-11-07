// Globals - No window !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// process - info about env where the program is being executed

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package,json - manifest file (stores important info bout project/package)
// manual approach (create package.json in the root, creat propertoes etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)