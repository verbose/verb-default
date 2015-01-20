'use strict';

module.exports = function (verb) {
  verb.task('default', function() {
    verb.src(['.verb*.md', 'docs/.verb/**/*.md'])
      .pipe(verb.dest('./'));
  });
  return verb;
};
