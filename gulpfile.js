import { src, dest } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css( done ) {
    src('src/scss/.app.scss')
        .pipe( sass() )
        .pipe( dest('build/css'))

    done()
}

// export function hola( done ) {
//     console.log('Hola desde Gulpfile.js')

//     done()
// }