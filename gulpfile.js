// including plugins
var gulp = require('gulp')
, minifyCss = require("gulp-minify-css");

var rename = require('gulp-rename');
 
// task
gulp.task('minify-css', function () {
    gulp.src('./src/global.css') // path to your file
    .pipe(minifyCss())
    .pipe(rename('./src/global--production.css'))
    .pipe(gulp.dest('.'));
   // .pipe(gulp.dest('./src/dist'));
});

// including plugins
var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html");
 
// task
gulp.task('minify-html', function () {
    gulp.src(['!./src/views/*.html','./src/*.html']) // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('./src'));
});