//Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");

sayHi("Mary");
sayHi(names.samuel);
sayHi(names.paul);
console.log(data);
