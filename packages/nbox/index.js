/**
 * @file index.js(nbox.js)
 * @description 模块大集合
 */

function welcome() {
  console.log("welcome use my nbox package");
}

module.exports = {
  cli: require('./lib/nbox-cli'),
  res: require('./lib/nbox-res'),
  kit: require('./lib/nbox-kit'),
  core: require('./lib/nbox-core'),
  wepy: require('./lib/nbox-wepy'),
  help: function() { console.log('nbox: ', module.exports); }
};
