const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css( done ) {
    console.log('Compilado SASS...');
    src('src/scss/**/*.scss') // Identificar el archivo .scss a compilar
      .pipe( plumber() ) //No detiene la ejecucion si hay algun error
      .pipe( sass() ) // Compilarlo
      .pipe( dest('build/css') ) // Almacenamiento en el disco duro
    done();
}

function dev ( done ) {
    watch('src/scss/**/*.scss', css); // Que la ejecucion no se pare y ste mirando cambios

    done();
}
 
//comando para correr: gulp dev
exports.css = css;
exports.dev = dev;