const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');
const glob = require('glob');
const shell = require('gulp-shell');
const gutil = require('gulp-util');

gulp.task('default', ['browserify', 'copy-html', 'copy-assets', 'watch']);

gulp.task('browserify', () => {
  return browserify('./source/app.js')
    .bundle()
    .on('error', onBrowserifyError)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

function onBrowserifyError(err) {
  gutil.log(gutil.colors.red(
    'Browserify compile error:\n',
    err.message)
  );
  this.emit('end');
}

const watchers = [
  'source/**/*.js',
  'source/rooms/*.json',
  'source/index.html'
];

gulp.task('watch', () => {
  return watch(watchers, () => {
    gulp.start('browserify');
    gulp.start('copy-html');
  });
});

gulp.task('copy-html', () => {
  gulp.src('./source/index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('copy-assets', () => {
  gulp.src('./source/assets/*.*')
  .pipe(gulp.dest('./build/assets'));
})

gulp.task('load-rooms', () => {
  glob('source/rooms/*.json', {}, function (err, files) {
    if (err) {
      throw err;
    }
    writeRoomLoader(files);
  });
});

const writeRoomLoader = (roomFiles) => {
  const ROOM_LOADER_START = 'const RoomLoader = {';
  const ROOM_LOADER_END = '};\nmodule.exports = RoomLoader;';
  const lines = [];

  lines.push(ROOM_LOADER_START);

  roomFiles.forEach((roomFile, idx) => {
    lines.push(roomFile.replace('source', `\troom${idx+1}: require('.`)
    .concat(`'),`));
  });

  lines.push(ROOM_LOADER_END);

  gulp.src(['source/app.js'])
  .pipe(shell([
    'echo Rewriting RoomLoader.js',
    'rm source/RoomLoader.js',
    'touch source/RoomLoader.js']
    .concat(
      lines.map(line => 'echo "' + line + '" >> source/RoomLoader.js')
    )
  ));
}
