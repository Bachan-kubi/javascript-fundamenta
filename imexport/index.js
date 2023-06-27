// import { a, b } from "./working.js"; // named import 
// import * as test from "./working.js"; // default import
import data from './working.js'; // default import
import {a as varA, b as varB} from './working.js'; // alias import
import myFunc from './function.js';
import message from './msg.js';

console.log(data);
console.log(varA, varB);


myFunc();

console.log(message());



// console.log(test.a, test.b)