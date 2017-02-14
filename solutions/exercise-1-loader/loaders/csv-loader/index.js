var loaderUtils = require('loader-utils');
var dsvFormat = require('d3-dsv').dsvFormat;

module.exports = function(text) {
  this.cacheable();

  // Optional: Using loaderUtils.parseQuery to choose an optional delimiter
  var query = loaderUtils.parseQuery(this.query),
      delimiter = query.delimiter || ',',
      dsv = dsvFormat(delimiter),
      res = dsv.parse(text);

      return 'module.exports = ' + JSON.stringify(res) + ';';
}

