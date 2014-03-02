/* global require, console */
var MAX_SIZE = 1024; // Change this line foz JS2K

require('colors');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var map = require('map-stream');


gulp.task('watch', function() {
  gulp.src('script.js')
    .pipe(watch())
    .pipe(rename('script.min.js'))
    .pipe(uglify({outSourceMap: true, mangle: true}))
    .pipe(gulp.dest('./'))
    .pipe(livereload());

  // TODO: Find a way to make this only load once.
  gulp.src('script.min.js')
    .pipe(watch())
    .pipe(map(function(file, callback) {
      if (file.stat) {
        var size = file.stat.size;
        var maxSize = MAX_SIZE;
        var sizeString = (size + '/' + maxSize + 'KB');
        var line = Array(sizeString.length + 20).join('-');
        var pad = '          ';
        var message = line + '\n' + pad + sizeString + '\n' + line;
        var percent = size/maxSize;

        if (percent < 0.75) {
          message = message.green;
          console.log(message.green);
        }
        else if(percent > 0.75 && percent < 1) {
          console.log(message.yellow);
        }
        else {
          console.log(message.red);
          console.log('\007'); // System beep
        }

        
      }
      callback(null, file);
    }));
});