var gulp = require('gulp'),
    gutil = require('gulp-util');


gulp.task('log', function(done) {
    gutil.log('Workflows are awesome');
    done();
});