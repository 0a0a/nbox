var gulp = require('gulp');
var gconcat = require('gulp-concat');
var gclean = require('gulp-clean');

var chalk = require('chalk');
var fs = require('fs');


class GulpTaskHolder {
  constructor(pkg) {
    this.pkg = pkg;
    this.mainJS = this.pkg.name + '.js';
    this.distDir = '../nbox/lib/';
  }

  static doConcat(inArr, outFile, final) {
    const outDir = final ? './lib' : './build';
    let stream = gulp.src(inArr)
      .pipe(gconcat(outFile, {newLine: '\n'}))
      .pipe(gulp.dest(outDir));
    return stream;
  }

  clean() {
    gulp.src(['./build/**/*', './lib/**/*'], {read: false}).pipe(gclean());
  }

  concat(inArr) {
    return GulpTaskHolder.doConcat(inArr, this.mainJS, true);
  }

  dispatch(ins, out) {
    // return gulp.src('./lib/*.js').pipe(gulp.dest(this.distDir));
    return gulp.src(ins).pipe(gulp.dest(out));
  }  
};

module.exports = GulpTaskHolder;
