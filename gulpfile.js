var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var smushit = require('gulp-smushit');
var changed = require('gulp-changed');

gulp.task('css', function() {
  gulp.src('assets/scss/**/*.scss')
    .pipe(changed('assets/css'))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['>0%']
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('assets/css'))
});
gulp.task('minify-css', function() {
  gulp.src('assets/css/all.css')
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('js', function() {
  gulp.src('assets/js/pre-concat/*.js')
    .pipe(changed('assets/js'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('assets/js'))
});
gulp.task('uglify-js', function() {
  gulp.src('assets/js/all.js')
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
});

gulp.task('images', function() {
  gulp.src('assets/img/**/*')
    .pipe(changed('assets/img'))
    .pipe(smushit({
      verbose: true
    }))
    .pipe(gulp.dest('assets/img'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['css'])
  gulp.watch('assets/css/all.css', ['minify-css'])
  gulp.watch('assets/js/pre-concat/*.js', ['js'])
  gulp.watch('assets/js/all.js', ['uglify-js'])
  gulp.watch('assets/img/**/*', ['images'])
});

gulp.task('default', ['watch', 'css', 'js', 'images']);