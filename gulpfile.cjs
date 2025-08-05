const {src, dest, watch} = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return src('./src/components/App.scss')
        .pipe(concat('App.css'))
        .pipe(sass({ style: 'compressed' }))
        .pipe(dest('./src/build'))
}

function scripts() {
    return src('./src/components/App.tsx')
        .pipe(concat('App.tsx'))
        .pipe(dest('./src/build'))
}

function watching() {
    watch('./src/components/App.scss', styles);
    watch('./src/components/App.tsx', scripts);
}

exports.default = watching;