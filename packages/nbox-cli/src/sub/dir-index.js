/**
 * @file dir-index.js
 */

import BaseHandler from '../com/base';

class DirIndex extends BaseHandler {
  constructor() {
    const options = [
      { n: '-i, --src', d: 'src dir' },
      { n: '-o, --dst', d: 'destion file' }
    ];
    super('dir-index', '目录索引化', options);
  }

  process(req) {
    console.log('I am the Dir Index handler: ', req);
  }
};

module.exports = DirIndex;
