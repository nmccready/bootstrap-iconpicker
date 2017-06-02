const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minCss = require('gulp-clean-css');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const seq = require('gulp-sequence');

gulp.task('clean', (cb) => {
  rimraf('./js/**/*.min.js', () => {
    rimraf('./css/**/*.min.css', cb);
  });
});

gulp.task('js', () => {
  gulp.src(['./js/*.js', './js/**/*.js'])
  .pipe(uglify({ output: { comments: /^!|@preserve|@license|@cc_on/i } }))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./js'));
});

gulp.task('css', () => {
  gulp.src('./css/*.css')
  .pipe(minCss())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./css'));
});

gulp.task('default', seq('clean', ['js', 'css']));
