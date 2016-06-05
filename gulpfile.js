var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
});

gulp.task ('copy-img', function () {
  return gulp.src ('src/img/*/*/*/*')
      .pipe (gulp.dest ('./dest/img/'));
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dest'))
});

gulp.task('guerraswatch', function () {
  gulp.watch('./src/*.html', ['minify',browserSync.reload]);
  gulp.watch('./src/sass/**/*.scss', ['sass',browserSync.reload]);
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./dest/"
    }
  });
});


gulp.task ('default', ['guerraswatch','copy-img','browser-sync']);