/**
 * @file fs.test.js
 * @description 文件接口测试
 */
const kit = require('../../index');
const expect = require('chai').expect;

describe('fs', () => {
  it('file-list', () => {
    let flist = kit.getFileList('/etc');
    console.log('flist:', flist);
  });
  it('file-md5', () => {
    let fmd5 = kit.calcFileMd5('/etc/hosts');
    console.log('fmd5: ', fmd5);
  });
  it('dir-md5', () => {
    kit.calcDirMd5('/etc', '/tmp/etc.md5.txt');
  });
});
