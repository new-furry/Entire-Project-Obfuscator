const fs = require('fs');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

const condition = (file) => {
    const extension = file.path.split('.').pop();

    if (extension === 'js') {
        return true
    } else {
        return false
    }
};

if (fs.existsSync('./obfuscated_source')) {
    fs.rmdir('./obfuscated_source', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }

        console.log(`Old directory is deleted!`);
        gulp.src(['original_source/**'])
            .pipe(gulpif(condition, javascriptObfuscator()))
            .pipe(gulp.dest('obfuscated_source'));
    });
} else {
    gulp.src(['original_source/**'])
        .pipe(gulpif(condition, javascriptObfuscator()))
        .pipe(gulp.dest('obfuscated_source'));
}
