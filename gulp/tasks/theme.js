import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('theme', function() {

	return gulp.src(config.theme.src)
		.pipe(changed(config.theme.dest)) // Ignore unchanged files
		.pipe(gulp.dest(config.theme.dest))
		.pipe(browserSync.stream());

});