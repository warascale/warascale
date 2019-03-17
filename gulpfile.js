var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	webpack = require('webpack-stream');

var reload = browserSync.reload,
	stream = browserSync.stream;

var PATH_APP = './app/',
	PATH_RES = './resource/',
	PATH_APP_ASSETS = PATH_APP + 'assets/',
	PATH_BUILD = './build/';

var path = {
	app: {
		base: PATH_APP,
		css: PATH_APP_ASSETS + 'css/',
		js: PATH_APP_ASSETS + 'js/'
	},
	res: {
		base: PATH_RES,
		sass: PATH_RES + 'sass/',
		js: PATH_RES + 'js/'
	}
}

gulp.task('sass', function(){
	gulp.src(path.res.sass + '**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(rename('app.bundle.css'))
		.pipe(plumber.stop())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(path.app.css))
		.pipe(reload({ stream: true }));
});

gulp.task('script', function(){
	gulp.src(path.res.js + 'app.js')
		.pipe(plumber())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(path.app.js));
});

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: path.app.base
		}
	})

	gulp.watch(path.app.base + '*.html').on('change', reload);
	gulp.watch(path.res.sass + '**/*.scss', ['sass']);
	gulp.watch(path.res.js + '**/*.js', ['script']);
	gulp.watch(path.res.js + 'app.js').on('change', reload);
});