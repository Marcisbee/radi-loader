const { getOptions } = require('loader-utils');
const radiCompiler = require('parcel-plugin-radi/src/radi-compiler.js');

module.exports = function(source) {
  return radiCompiler(
    source,
    this._module.rawRequest.match(/\/*([\w]+).radi/)[1] + '.radi',
    this._module.userRequest
  ).code;
}
