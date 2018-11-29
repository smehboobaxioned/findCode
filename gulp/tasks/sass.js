const gulp = require('gulp'),
sass = require('gulp-sass'),
notify = require('gulp-notify'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	gulp.src('./assets/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./assets/css'))
    .pipe(notify({ message: 'SASS Compiled Successfully' }));
});