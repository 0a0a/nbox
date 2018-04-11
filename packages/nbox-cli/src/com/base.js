/**
 * @file base.js
 * @description 所有子命基类.
 */

import colout from './color-output';

export default class BaseHandler extends colout {
  constructor(name, desc, options) {
    super();
    this.name = name;
    this.desc = desc;
    this.options = options;
  }

  process(prog, argv) {
    console.log('argv: ', argv);
    console.log('prog: ', prog);
    console.log('This is the Default handler');
  }

  render(program) {
    const that = this;
    let subprog = program.command(this.name).description(this.desc);
    this.options.forEach(opt => {
      subprog = subprog.option(opt.n, opt.d);
    });
    subprog = subprog.action( function(...args) {
      let prog = args.pop();
      let argv = args;
      that.process(prog, argv);
    });
    return subprog;
  }
};
