var gulp = require('gulp'),
    // watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    // webpackConfig = require("./webpack.config.js"),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

// gulp.task('webpack', function () {
//     return gulp.src('./src/app.ts')
//         .pipe(webpack(webpackConfig))
//         .pipe(gulp.dest('./dist'));
// });


gulp.task('ts', function () {
    // var tsResult = tsProject.src()
    var tsResult = gulp.src("src/gis/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(uglify())
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(gulp.dest('dist/gis'))
        .on('finish',()=>{console.log('地图模块编译完成')});
});


gulp.task('watch', function () {
    gulp.watch('./src/gis/**/*.ts', ['ts']);
});

gulp.task('default', ['ts']);

// gulp.task('stream', function () {
//     // Endless stream mode 
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });

// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });