const gulp = require('gulp');

var ClientOrigin = './src/sass/';
var PathDest = './dist/';

/* Cópia de arquivos css */

gulp.task('copyStyles', () => {
  var CssOrigin = ClientOrigin + 'styles.css';
  var CssDest = PathDest + 'css/';

  gulp.src(CssOrigin).pipe(gulp.dest(CssDest));
});

gulp.task('default', ['copyStyles'], () => {
  // watch for CSS changes
  var CssOrigin = ClientOrigin + 'styles.css';
  var watcher = gulp.watch(CssOrigin, () => {
    // run styles upon changes
    gulp.run('copyStyles');
  });
  watcher.on('change', event => {
    console.log(
      '***** Arquivo CSS em' + event.path + ' substituído em ' + event.type + ' *****'
    );
  });
});
