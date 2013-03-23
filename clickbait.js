var inflection = require( 'inflection' );
var nouns = require('./nouns.js');

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
}

var headline = "The " + Math.floor(Math.random()*10+10)+ " Hottest " + inflection.pluralize(nouns.pick().word);

console.log(headline);