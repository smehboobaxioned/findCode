const gulp = require('gulp'),
uglify = require('gulp-uglifyjs'),
notify = require('gulp-notify');

gulp.task('uglify', function() {
  gulp.src('./assets/js/*.js')
    .pipe(uglify('script.min.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(notify({ message: 'Script Minified Successfully' }))
});