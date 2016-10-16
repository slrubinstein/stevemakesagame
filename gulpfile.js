const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');

gulp.task('default', ['browserify', 'copy-html', 'watch']);

gulp.task('browserify', function() {
  return browserify('./source/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

const watchers = [
  'source/**/*.js',
  'source/assets/*.json',
  'source/index.html'
];

gulp.task('watch', function() {
  return watch(watchers, function () {
    gulp.start('browserify');
    gulp.start('copy-html');
  });
});

gulp.task('copy-html', function() {
  gulp.src('./source/index.html')
  .pipe(gulp.dest('./build'));
});