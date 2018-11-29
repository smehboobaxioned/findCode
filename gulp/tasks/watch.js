const gulp = require('gulp'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./index.php', function() {
    browserSync.reload();
  });

  gulp.watch('./assets/sass/**/*.scss', function() {
    gulp.start('cssInject');
  });

  // Our Site css ( i.e. in assets/css/style.css ) is injected without browser refresh
  gulp.task('cssInject', ['sass'],function(){
    gulp.src('./assets/css/style.css')
      .pipe(browserSync.stream())
  });

  // Scripts are watched
  gulp.watch('./assets/js/*.js', ['uglify']);

});