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
});

gulp.task('load-rooms', () => {
  glob('source/rooms/*.json', {}, function (err, files) {
    if (err) {
      throw err;
    }
    writeRoomLoader(files);
  });
});

gulp.task('copy-rooms', () => {
  let count = 4;
  const commands = [];

  for (; count <= 16; count++) {
    commands.push(`cp ../game-practice/source/assets/level${count}.json source/rooms/room${count}.json`);
  }
  gulp.src(['./'])
    .pipe(shell(commands));
});

function writeRoomLoader(roomFiles) {
  const ROOM_LOADER_START = 'const RoomLoader = {';
  const ROOM_LOADER_END = '};\nmodule.exports = RoomLoader;';
  const lines = [];

  lines.push(ROOM_LOADER_START);

  roomFiles.forEach((roomFile) => {
    const roomName = roomFile.replace('source/rooms/', '').replace('.json', '');
    lines.push(roomFile.replace('source', `\t${roomName}: require('.`)
    .concat(`'),`));
  });

  lines.push(ROOM_LOADER_END);

  gutil.log(gutil.colors.yellow('Rewriting RoomLoader.js'));

  gulp.src(['source/app.js'])
  .pipe(shell([
    'rm source/RoomLoader.js',
    'touch source/RoomLoader.js']
    .concat(
      lines.map(line => 'echo "' + line + '" >> source/RoomLoader.js')
    )
  ));
}
