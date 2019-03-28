const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
});

gulp.task('image', () =>
    gulp.src('./src/pre-images/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [
                {
                    removeViewBox: true
                }
            ]
        }))
        .pipe(gulp.dest('./dist/images'))
        .pipe(connect.reload())
        
);
gulp.task('fonts', function () {
    gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts')) 
    .pipe(connect.reload())
});
gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
});

gulp.task('js', function () {
    gulp.src('./src/js/**.js')
    .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
});

gulp.task('styles', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['styles'])
    gulp.watch('./src/*.html', ['html'])
    gulp.watch('./src/js/**/*.js', ['js'])
})
gulp.task('default', ['watch', 'server']);