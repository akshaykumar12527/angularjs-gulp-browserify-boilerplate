import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

	global.isProd = false;

	runSequence(['theme', 'images', 'views'], 'browserify', 'watch', cb);

});