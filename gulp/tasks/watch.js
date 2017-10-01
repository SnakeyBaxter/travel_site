var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){

  browserSync.init({
    notify: false,  //hides css notification in browser
    server: {
      baseDir: "app"
    }
  });

//get browserSync to refresh browser after changes in index.html
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

});

//make browserSync update css in browser after auto-changes made to main css
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
