var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');


gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dest/html'))
});

 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
});
 
gulp.task('guerraswatch', function () {
  gulp.watch('./src/html/**/*.html', ['minify']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});