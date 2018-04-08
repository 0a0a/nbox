/**
 * @file index.js
 * @description nbox 统一对外接口文件
 */

function help() {
  console.log('ALL: ', module.exports);
}

const CORE = Object.assign(
  {},
  SUB_COM,
  SUB_WX,
  SUB_FOOBAR,
  help
);

module.exports.core = CORE;
module.exports.help = help;
