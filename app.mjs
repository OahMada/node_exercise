// CommonJS, every file is module (by default);
// Modules - Encapulated Code (only share minimun);

import {john, peter} from "./4-names.mjs";
import sayhi from "./5-utils.mjs";

// var {john, peter} = require("./4-names");
// var sayHi = require("./5-utils");
//console.log(names);
var data = require("./6-alternative-flavour");


sayhi('susan');
sayhi(john);
sayhi(peter);
