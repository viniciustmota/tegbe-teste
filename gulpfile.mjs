import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
const { src, dest, series, watch } = gulp;

export function minifyCss() {
  return src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}

export function minifyJs() {
  return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

export function minifyHtml() {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest('dist'));
}

export function watchFiles() {
  watch('src/js/*.js', minifyJs);
  watch('src/*.html', minifyHtml);
  watch('src/css/*.css', minifyCss);
  watch('src/assets/**/*.{png,jpg,jpeg,gif,svg}');
}

export const build = series(minifyCss, minifyJs, minifyHtml);
export default series(build, watchFiles);
