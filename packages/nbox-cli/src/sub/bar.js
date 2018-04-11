/**
 * @file foo.js
 */

import BaseHandler from '../com/base';

class Bar extends BaseHandler {
  constructor() {
    const options = [
      { n: '-s, --src', d: 'src dir' },
      { n: '-d, --dst', d: 'destion file' },
      { n: '-l, --list', d: 'list files' }
    ];
    super('bar', 'demo-bar', options);
  }

  process(req) {
    console.log('I am from the BAR handler: ', req);
  }
};

module.exports = Bar;
