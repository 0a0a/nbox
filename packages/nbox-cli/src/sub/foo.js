/**
 * @file foo.js
 */

import BaseHandler from '../com/base';

class Foo extends BaseHandler {
  constructor() {
    const options = [
      { n: '-s, --src <dir>', d: 'src dir' },
      { n: '-d, --dst <outfile>', d: 'destion file' },
      { n: '-l, --list', d: 'list files' }
    ];
    super('foo', 'demo-foo', options);
  }

  process(prog, argv) {
    this.log('THIS: ', this.green);
    this.log(this.green('src: ' + prog.src));
    this.log(this.yellow('dst: %s'), prog.dst);
    this.log(this.bgRed('argv: ') + argv);
    this.log('I am from the FOO handler: (src, dst)=(%s, %s)', prog.src, prog.dst);
  }
};

module.exports = Foo;
