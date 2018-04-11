#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const pkg = require('../package.json');
const fs = require('fs');
const path = require('path');
const api = require(process.env.NODE_ENV === 'dev' ? '../../nbox/index' : 'nbox');
const babel = require('babel-core/register');

/**
 * @function main
 * @description 入口函数
 * @param {Array} argv
 */
function main(AppDir, AppName, argv) {
  program
    .version(pkg.version, '-v, --version')
    .usage(chalk.green('<command> [options]'))
    .option('-C, --chdir <path>', 'change the working directory')
    .option('-c, --config <path>', 'set config path. defaults to ./nbox.conf | ./nbox.yml')
    .option('-T, --no-tests', 'ignore test hook');
  
  program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      var mode = options.setup_mode || "normal";
      env = env || 'all';
      console.log(chalk.green('setup for %s env(s) with %s mode'), env, mode);
    });
  
let p =  program
    .command('exec <cmd>')
    .alias('ex')
    .description('execute the given remote cmd');
    p = p
    .option("-e, --exec_mode <mode>", "Which exec mode to use");
   p = p
    .action(function(cmd, options){
      console.log('exec "%s" using %s mode', cmd, options.exec_mode);
    }).on('--help', function() {
      console.log('  Examples:');
      console.log();
      console.log('    $ deploy exec sequential');
      console.log('    $ deploy exec async');
      console.log();
    });
  
  program
    .command('*')
    .action(function(env){
      console.log('deploying "%s"', env);
    });
  
  program.parse(process.argv);
}

const AppDir = path.dirname(process.argv[1]);
const AppName = path.basename(process.argv[1]);
main(AppDir, AppName, process.argv);
