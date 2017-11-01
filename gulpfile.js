var gulp       = require('gulp'),
  run          = require('gulp-run'),
  sass         = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss    = require('gulp-minify-css'),
  plumber      = require('gulp-plumber'),
  browserSync  = require('browser-sync'),
  reload       = browserSync.reload;

gulp.task('docs-serve', function () {
  run('npm run docs:serve').exec('', function () {
    reload({ stream: true });
  });
});

// Styles
gulp.task('styles', function () {
  return gulp.src('src/scss/website.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('styles'))
    .pipe(reload({ stream: true }));
});

// BrowserSync
gulp.task('browser-sync', function () {
  browserSync({
    logPrefix: 'Tesseract KB',
    proxy:     'localhost:4000',
    files:     ['styles/website.css'],
    open:      false,
    notify:    false
  });
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['docs-serve', 'browser-sync', 'watch']);
