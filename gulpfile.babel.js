var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackCfg = require('./webpack.config.js');

gulp.task('watch', function () {
  gulp.watch('src/*.js', ['build:js']);
  gulp.watch('src/components/*.vue', ['build:js']);
});

gulp.task('build:js', function () {
  // run webpack
  webpack(webpackCfg, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      // output options
    }));
    //callback();
  });
  console.log('build');
});

gulp.task('build', [
  'build:js']
);

gulp.task('default', ['build']);
