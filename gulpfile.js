// W tym pliku konfigurujemy zadania dla gulpa

var gulp = require('gulp');
var jshint = require("gulp-jshint");

/*
gulp.task('nazwa-zadania', function() {
    //funkcja, którą uruchamiamy po wpisaniu nazwy zadania
});
*/

gulp.task('pranie', function(){
    console.log('robię pranie');
});

gulp.task('jshint', function() {
    return gulp.src("*.js")
        .pipe(
            jshint() //przetwanie za pomocą narzędzia służącego do analizy plików pod kątem zgodności składniowej
        )
        .pipe(
            jshint.reporter('default') // wyświetla raport
        );
});

var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('sass', function() {
return gulp.src('scss/*.scss')
.pipe(sourcemaps.init())
.pipe(sass({
errLogToConsole: true,
outputStyle: 'expanded' // sami ustawiamy jeden ze styli kompilacji: nested, expanded, compact, compressed.
}))
.pipe(sourcemaps.write())
.pipe(gulp.dest('css')); // wydajemy dyspozycję, która ustawia destynację nowych plików CSS w folderze css
});


//watcher
gulp.task('watch', function() {
    gulp.watch('*js', ["jshint"]);
     //plik + funkcja <-- obserwujemy
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/*/*.scss', ['sass']);
});
