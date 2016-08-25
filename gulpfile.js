let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let util = require('gulp-util');
let buffer = require('vinyl-buffer');
let source = require('vinyl-source-stream');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('build:demo', () => {
	browserify('./demo/app.js', { debug: true })
	.add(require.resolve('babel-polyfill/dist/polyfill.min.js'))
	.transform(babelify.configure({ presets: ['es2015', 'es2016', 'stage-0', 'stage-3'] }))
	.bundle()
	.on('error', util.log.bind(util, 'Browserify Error'))
	.pipe(source('demo.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({ loadMaps: true }))
	.pipe(uglify({ mangle: false }))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./demo'));
});

gulp.task('default', ['build:demo']);
