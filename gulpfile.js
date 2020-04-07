const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const cssNano = require('gulp-cssnano');

function copy() {
    return gulp.src([
      'app/*.html',
     // 'app/**/*.jpg',
    ])
    .pipe(gulp.dest('build'));
  }

gulp.task('copy', copy);

function serve() {
    return browserSync.init({
      server: 'build',
      open: false,
      port: 3000
    });
  }

  function reload(done) {
    browserSync.reload();
    done();
  }

function processJs() {
    return gulp.src('app/js/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/js'));
  }

gulp.task('processJs', processJs);

function watch() {
    gulp.watch('app/js/*.js', gulp.series(processJs, reload));
    gulp.watch('app/sass/*.scss', gulp.series(compileSass, reload));
  }

gulp.task('watch', watch);

  function compileSass() {
    return gulp.src('app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/sass'));
  }
  
gulp.task('sass', compileSass);

gulp.task('buildAndServe', gulp.series(copy, serve));
  
gulp.task('buildAndServe', 
  gulp.series(
     copy,
     processJs,
     compileSass,
     gulp.parallel(serve,watch),
     )
);
