/**
 * @file misc.js
 * @description 杂项
 */
const KIT_COM_MISC = (function() {

  function signature() {
    return 'KIT_COM_MISC';
  }

  const out = {
    signature
  };

  return out;

})();

/**
 * @file fs.js
 * @description 文件系统相关
 */
const KIT_FS_FS = (function() {

  signature() {
    return 'KIT_FS_FS';
  }

  const out = {
    signature
  };

  return out;

})();

/**
 * @file nbox-kit-index.js
 * @description 
 */

const KIT = Object.assign(
  {},
  KIT_COM_MISC,
  KIT_FS_FS,
  help: function() { console.log('kit: ', module.exports.res); }
);

module.exports = KIT;
