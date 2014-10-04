var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  coffee = require('gulp-coffee'),
  rubanComponents = [
    'bower_components/normalize-css/normalize.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/highlightjs/styles/tomorrow.css',
    'bower_components/jquery/jquery.min.js',
    'bower_components/jquery/jquery.min.map',
    'bower_components/keymaster/keymaster.js',
    'bower_components/hammerjs/hammer.min.js',
    'bower_components/hammerjs/hammer.min.map',
    'bower_components/highlightjs/highlight.pack.js',
    'bower_components/font-awesome/fonts/fontawesome-*'
  ];


gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.tmp']
  });
});

gulp.task('livereload', function() {
  gulp.src('.tmp/**/*')
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function() {
  gulp.src('src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('images', function() {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('.tmp/images'));
});

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('.tmp'));
});

gulp.task('ruban-components',function() {
  gulp.src(rubanComponents)
    .pipe(gulp.dest('.tmp/components'));
});

gulp.task('watch', function() {
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('src/coffee/*.coffee', ['coffee']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('src/*.html', ['html']);
})

gulp.task('dist', function() {
  gulp.src('.tmp/**')
    .pipe(gulp.dest('./'));
});


/******* Main tasks *******/

gulp.task('clean', function() {
  gulp.src('.tmp', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('build', [
  'less', 
  'coffee', 
  'ruban-components',
  'images',
  'html'
]);

gulp.task('publish', [
  'build',
  'dist'
]);

gulp.task('default', [
  'build',
  'webserver',
  'livereload',
  'watch'
]);
