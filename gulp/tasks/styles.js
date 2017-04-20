import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import lessVars from 'gulp-add-less-variables';
import livereload from 'gulp-livereload';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import minimist from 'minimist';

var knownOptions = {
  string: 'min',
  default: {
    'min': false
  }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('styles', function() {


  var srcThing = gulp.src(config.styles.src);
  const createSourcemap = !global.isProd || config.styles.prodSourcemap;

  return srcThing
    .pipe(lessVars({
      importGoogleFonts: (process.env.NODE_ENV == 'development' ? false : true)
    }))
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(less())
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename({
      basename: 'app',
      suffix: '.min'
    }))



  .pipe(gulpif((options.min !== false), cleanCSS({
        keepSpecialComments: 0,
        compatibility: 'ie8',
        debug: true
      },
      function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
      }
    )))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(livereload())
    .pipe(notify({
      message: 'Styles task complete'
    }));

});