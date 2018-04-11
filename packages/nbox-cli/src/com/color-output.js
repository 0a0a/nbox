/**
 * @file color-output.js
 * @description 彩色输出
 */

import chalk from 'chalk';
import { vsprintf } from 'sprintf-js';

export default class ColorOutput {
  constructor() {
    this.chalk = chalk;
  }

  red(...args) { return this.chalk.red(args); }
  green(args) { return this.chalk.green(args); }
  blue(...args) { return this.chalk.blue(args); }
  yellow(...args) { return this.chalk.yellow(args); }

  bgRed(...args) { return this.chalk.bgRed(args); }
  bgGreen(...args) { return this.chalk.bgGreen(args); }
  bgBlue(...args) { return this.chalk.bgBlue(args); }
  bgYellow(...args) { return this.chalk.bgYellow(args); }

  log(format, ...args) {
    const s = vsprintf(format, args);
    console.log(s); 
  }
  logErr(format, ...args) {
    const s = vsprintf(format, args); 
    console.logErr(s);
  }
};
