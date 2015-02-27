'use strict';

var gutil = require('gulp-util');

module.exports = function (verb) {
  verb.task('default', function() {
    verb.src(['.verb*.md', 'docs/_verb/**/*.md'])
      .on('error', gutil.log)
      .pipe(verb.dest('./'));
  });
  return verb;
};
