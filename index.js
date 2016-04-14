'use strict';

var isObject  = require('is-object');
var pickItems = require('pick-items');
var keys      = require('object-keys');


module.exports = function (object, count) {

  if (!object || !isObject(object)) {
    return [];
  }

  var names  = keys(object);
  var length = names.length;

  if (!length) {
    return [];
  }

  return pickItems(names, { count: count, shuffled: true });
};
