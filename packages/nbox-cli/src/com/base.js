/**
 * @file base.js
 * @description 所有子命基类.
 */

export default class BaseHandler {
  constructor(name, desc, options) {
    this.name = name;
    this.desc = desc;
    this.options = options;  
  }

  process() {
    console.log('This is the Default handler');
  }

  render(program) {
    program.command(this.name).description(this.desc);
    program.action(this.process);
    this.options.forEach(opt => {
      program.option(opt.n, opt.d);
    });
  }
};
