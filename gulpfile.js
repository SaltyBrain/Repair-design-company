const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('hello', function(done) {
  console.log('Hello world');
  done();
});

gulp.task('browser', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('mincss', function (done) {
  gulp.src('css/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css'));
      done();
});