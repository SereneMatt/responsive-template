var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// TODO: Implement gulp.parallel
// gulp.task('run', ['sass', 'css']);

// gulp.task('watch', function () {
//   gulp.watch('./styles/*.sass', ['sass']);
//   gulp.watch('./css/*.css', ['css']);
// });

// gulp.task('default', ['watch']);
