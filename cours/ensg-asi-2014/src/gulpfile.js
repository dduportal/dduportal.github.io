var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  coffee = require('gulp-coffee'),
  w3cjs = require('gulp-w3cjs')
  rubanComponents = [
    'bower_components/normalize-css/normalize.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/highlightjs/styles/tomorrow.css',
    'bower_components/jquery/jquery.min.js',
    'bower_components/jquery/jquery.min.map',
    'bower_components/keymaster/keymaster.js',
    'bower_components/hammerjs/hammer.min.js',
    'bower_components/hammerjs/hammer.min.map',
    'bower_components/highlightjs/highlight.pack.js'
  ];
  rubanFonts = [
    'bower_components/font-awesome/fonts/*'
  ]


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
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function() {
  gulp.src('coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('images', function() {
  gulp.src('images/**/*')
    .pipe(gulp.dest('.tmp/images'));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('.tmp'));
});

gulp.task('ruban-components',function() {
  gulp.src(rubanComponents)
    .pipe(gulp.dest('.tmp/components'));
});

gulp.task('ruban-fonts', function() {
  gulp.src(rubanFonts)
    .pipe(gulp.dest('.tmp/fonts'));
});

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('coffee/*.coffee', ['coffee']);
  gulp.watch('images/*', ['images']);
  gulp.watch('*.html', ['html']);
})

gulp.task('dist', function() {
  gulp.src('.tmp/**')
    .pipe(gulp.dest('../'));
});


/******* Main tasks *******/

gulp.task('clean', function() {
  gulp.src('.tmp', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('validate', function () {
    gulp.src('*.html')
        .pipe(w3cjs());
});

gulp.task('build', [
  'less', 
  'coffee', 
  'ruban-components',
  'ruban-fonts',
  'images',
  'html'
]);

gulp.task('publish', [
  'validate',
  'build',
  'dist'
]);

gulp.task('default', [
  'build',
  'webserver',
  'livereload',
  'watch'
]);
