'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('default', ['serve']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', reload);
});

gulp.task('serve', ['watch'], function () {
  browserSync({
    server: {
      baseDir: ['bower_components', 'src']
    },
    browser: ['google chrome'],
  });
});
