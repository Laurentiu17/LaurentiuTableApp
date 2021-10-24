'use strict';

var fs = require('fs');

var manifest = require('./build/asset-manifest');
var sw = fs.readFileSync('./build/service-worker.js', 'utf8');
var cacheIdx = sw.indexOf('precache-manifest');
var cachePath;
if (cacheIdx !== -1) {
  cachePath = sw.substr(cacheIdx, 53);
}
if (!cachePath) throw new Error('No cache found!');
var cache = fs.readFileSync('./build/' + cachePath, 'utf8');
var files = manifest['files'];

Object.keys(files).forEach(key => {
  if (key.endsWith('.map')) {
    return;
  }

  var path = files[key];

  if (!path.startsWith('/static/')) {
    return;
  }
