const jsonToHtmlTable = require('json-to-htmltable');
const inventory = require('./assets/inventory.csv');

const body = document.getElementsByTagName('body')[0];

console.log(inventory);

body.innerHTML += jsonToHtmlTable(inventory);
