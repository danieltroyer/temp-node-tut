// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor')
require('./7-mid-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)