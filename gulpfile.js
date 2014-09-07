'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('default', ['serve']);

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: ['bower_components', 'src']
    },
    browser: ['google chrome'],
  });
});
