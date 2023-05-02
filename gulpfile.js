const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const scss = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const rm = require('gulp-rm');
const gcmq = require('gulp-group-css-media-queries');
const order = require('gulp-order');
const sassGlob = require('gulp-sass-glob');

// Обработка HTML
gulp.task('html', function () {
  return gulp.src(['src/html/*.html'])
    .pipe(fileInclude({
      basePath: 'src/html/include/'
    }))
    .pipe(fileInclude({
      basePath: 'src/html/items/'
    }))
    .pipe(fileInclude({
      basePath: 'src/html/sections/'
    }))
    .pipe(gulp.dest('./'));
});


// Обработка SCSS
gulp.task('scss', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(sassGlob())
    .pipe(scss().on('error', scss.logError))
    .pipe(gcmq())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

// Отслеживание изменений
gulp.task('watch', function () {
  gulp.watch('src/html/*.html', gulp.series('html'));
  gulp.watch('src/html/sections/**/*.html', gulp.series('html'));
  gulp.watch('src/html/bem/**/*.html', gulp.series('html'));
  gulp.watch('src/html/base/**/*.html', gulp.series('html'));
  gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
});

// Задача по умолчанию
gulp.task('default', gulp.series('html', 'scss', 'watch')
);
