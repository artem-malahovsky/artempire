var gulp        = require('gulp'),
    less        = require('gulp-less'),
    // browserSync = require('browser-sync').create(); // Подключаем Browser Sync

gulp.task('less', function(done) { // Создаем таск "sass"
    return gulp.src('app/less/main.less') // Берем источник
      .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
      .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
      // .pipe(browserSync.reload({stream: true}))
      done();
});

// gulp.task('browser-sync', function(done) { // Создаем таск browser-sync
//     browserSync.init({ // Выполняем browser Sync
//         server: { // Определяем параметры сервера
//             baseDir: 'app' // Директория для сервера - app
//         },
//         notify: false // Отключаем уведомления
//     });
//     done();
// });
//
// gulp.task('watch', function(done) {
//     gulp.watch('app/less/**/*.less', gulp.series('less')); // Наблюдение за sass файлами
//     // Наблюдение за другими типами файлов
// });
// gulp.task('default', gulp.series(
//    gulp.parallel('less','watch')));
