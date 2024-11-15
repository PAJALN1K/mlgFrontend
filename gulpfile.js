/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest, watch, parallel } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

function styles() {
  return src("./src/app/assets/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(dest("public/css"));
}

function watching() {
  watch(["src/**/*.scss"], styles);
}

exports.styles = styles;
exports.watching = watching;

exports.default = parallel(styles, watching);
