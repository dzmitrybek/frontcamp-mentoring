const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const argv = require('yargs').argv;

const ENV = {
    DEVELEPMENT: 'dev',
    PRODUCTION: 'prod',
}
const environment = argv.env || ENV.DEVELEPMENT;

gulp.task('build', function () {
    return browserify({
        entries: './src/app.js',
        debug: environment === ENV.DEVELEPMENT,
        paths: ['./src']
    })
        .transform("babelify", { presets: ["@babel/preset-env"] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['build']);
});
