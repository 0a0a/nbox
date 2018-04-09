var gulp = require('gulp');
var concat = require('gulp-concat');
var chalk = require('chalk');
var fs = require('fs');
var clean = require('gulp-clean');

const pkg = require('./package.json');

function doConcat(inArr, outFile, final) {
  const outDir = final ? './lib' : './build';
  let stream = gulp.src(inArr)
    .pipe(concat(outFile, {newLine: '\n', banner: '/* Just have fun*/'}))
    .pipe(gulp.dest(outDir));
  return stream;
}

gulp.task('sub-cn', function() {
  return doConcat(['./src/cn/area.js'], 'cn.js', false);
});

gulp.task('main', ['sub-cn'], function(cb) {
  let stream = doConcat(['./build/cn.js', './src/index.js'], pkg.name + ".js", true);
  cb(null, 'main-done');
});

gulp.task('build', ['main'], function(cb) {
  cb(null, 'build-done');
});

gulp.task('clean', function(cb) {
  gulp.src('build/**/*', {read: false}).pipe(clean());
  gulp.src('lib/**/*', {read: false}).pipe(clean());
  cb(null, 'clean-done');
});

gulp.task('default', ['build']);
