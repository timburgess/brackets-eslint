define((require, exports, module) => {
  'use strict';

  const PackageJson = JSON.parse(require('text!../package.json'));
  const EXTENSION_NAME = PackageJson.name;

  function log(level, msgs) {
    return console[level].apply(console, ['[' + EXTENSION_NAME + ']'].concat(msgs));
  }

  exports.info = (...msgs) => {
    return log('log', msgs);
  };

  exports.error = (...msgs) => {
    return log('error', msgs);
  };

});
