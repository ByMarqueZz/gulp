const {series, parallel, src, dest, watch} = require("gulp");

function holaMundo(cb) {
  console.log("Hola mundo");
  cb();
}

function adiosMundo(cb) {
    console.log("Adios mundo");
    cb();
}

// #############

function pipeline() {
    return src("css/*.css").pipe(dest("up/css"));
}

function vigila(cb) {
    watch("css/*.css", holaMundo);
    cb();
}

exports.holaMundo = holaMundo;
exports.adiosMundo = adiosMundo;
exports.default = holaMundo;
exports.pipeline = pipeline;
exports.vigila = vigila;
exports.serie = series(adiosMundo, holaMundo);
exports.paralelo = parallel(adiosMundo, holaMundo);