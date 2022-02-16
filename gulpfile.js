// Все переменные, в ковычках-пакеты которые подключены
const { src, dest, series, watch} = require('gulp');/*команды плагина галп*/
const concat = require('gulp-concat'); /*конкатенация(слияние) файлов*/
const htmlMin = require('gulp-htmlmin');/*минификатор HTML*/
const autoprefixer = require('gulp-autoprefixer');/*автопрефиксер, вставка префиксов там где нужно для работы в старых браузерах*/
const cleanCss = require('gulp-clean-css');/*слияние и минификация CSS*/
const svgSprite = require('gulp-svg-sprite');/*создание спрайтов*/
const image = require('gulp-image');/*обработка изображений*/
const babel = require('gulp-babel');/*конвертация JS  в старые версии русскоязычная документация https://only-to-top.ru/blog/tools/2019-10-20-gulp-babel.html*/
const terser = require('gulp-terser');/*современная минификация и оптимизация JS*/
const notify = require('gulp-notify');/*выводит ошибки при сборке Gulp*/
const sourcemaps = require('gulp-sourcemaps');/*карта зависимосттей для возможности посмотреть источник в котором записаа строка*/
const del = require('del');/*удаление файлов*/
const browserSync = require('browser-sync').create();/*плагин для запуска лайфсервера*/

// ТАСКИ ДЛЯ GULP

// Удаление папки разработки и продакшена перед компиляцией
const clean = () => {
    return del(['dist','prod'])
}

// ТАСКИ ДЛЯ РАБОЧЕЙ ПАПКИ

// перенос ресурсов в рабочую папку
const resourses = () => {
    return src('src/resourses/**')
    .pipe(dest('dist/resourses'))
}
// перенос PHP ресурсов в рабочую папку
const resoursesPHP = () => {
  return src('src/**/*.php')
  .pipe(dest('dist'))
}
// перенос шрифтов в рабочую папку
const fonts = () => {
  return src('src/fonts/**')
  .pipe(dest('dist/fonts'))
}
// создание спрайта
const svgSprites = () => {
    return src('src/img/sprite/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite:'../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/img'))
}
// Обработка изображений
const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}
// перенос HTML в разработку
const htmlDist = () => {
    return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream()) /*отслеживание*/
}
// компиляция стилей CSS
const styles = () => {
    return src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream()) /*отслеживание*/
}
// компиляция JS в папку разработки
const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream()) /*отслеживание*/
}
// таск лайфсервера
const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}
// ОТСЛЕЖИВАНИЕ
watch('src/img/svg/**/*.svg', svgSprites);resourses
watch('src/resourses/**', resourses);
watch('src/**/*.html', htmlDist);
watch('src/css/**/*.css', styles);
watch('src/js/**/*.js', scripts);

// ТАСКИ ДЛЯ ПЕРЕНОСА В ПАПКУ ГОТОВОГО ПРОЕКТА

// минификация и перенос ресурсов в готовый проект
const resoursesProd = () => {
  return src('src/resourses/**')
  .pipe(dest('prod/resourses'))
}
// перенос PHP ресурсов в готовый проект
const resoursesPHPProd = () => {
  return src('src/**/*.php')
  .pipe(dest('prod'))
}
// перенос изображений в готовый проект
const imageProd = () => {
    return src('dist/img/**')
    .pipe(dest('prod/img/'))
}
// перенос шрифтов в готовый проект
const fontsProd = () => {
  return src('dist/fonts/**')
  .pipe(dest('prod/fonts'))
}
// компиляция и минификация CSS и перенос в готовый проект
const stylesProd = () => {
    return src('dist/**/*.css')
    // временно отключил
    // .pipe(concat('style.css'))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(cleanCss({
        level: 2
    }))
    .pipe(dest('prod'))
}
// минификация JS и перенос в продакшен
const scriptsProd = () => {
    return src([
        'dist/js/*.js',
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(terser({
        toplevel:true /*удаление неиспользуемых функций и переменных из кода*/
    }).on('error', notify.onError()))
    .pipe(dest('prod/js'))
}
// минификация HTML
const htmlProd = () => {
    return src('dist/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('prod'))
}

// КОМАНДЫ ДЛЯ КОНСОЛИ
exports.images = images; /*обработать изображение*/
exports.svgSprites = svgSprites; /*создать спрайт*/

// ОБЩАЯ КОМАНДА ДЛЯ ЗАПУСКА GULP
exports.default = series(clean, resourses, resoursesPHP, fonts, svgSprites, images, htmlDist, styles, scripts, resoursesProd, resoursesPHPProd, imageProd, stylesProd, scriptsProd, htmlProd, fontsProd, watchFiles)

