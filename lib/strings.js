const empty = '',
    app =
        "const bodyParser = require('body-parcer'),express = require('express'),favicon = require('serve-favicon'),logger = require('morgan'),path = require('path'),mongoose = require('mongoose'),passport = require('passport'),flash = require('connect-flash'),session = require('express-session');const { config } = require('./src/config/config-app');const app = express();app.set('port', process.env.PORT || config.port);app.set('views', path.join(__dirname, './src/views'));app.set('view engine', 'pug');app.use(favicon(path.join(__dirname, 'public/favicon', 'favicon.ico')));app.use(logger('dev'));app.use(session({secret: config.secret,resave: true,saveUninitialized: true}));app.use(flash());app.use((req, res, next) => {res.locals.success = req.flash('success');res.locals.error = req.flash('error');res.locals.user = req.user || null;next();});app.use('/public', express.static(path.join(__dirname, 'public')));app.use(bodyParser.urlencoded({ extended: true }));app.get('/', (req, res) => {res.send('Hola Mundo!');});const server = app.listen(app.get('port'), function() {console.log(`Escuchando http://localhost:${server.address().port}`);});",
    db =
        "const mongoose = require('mongoose');const { config } = require('./config-app');mongoose.connect(`mongodb://localhost/${config.db_name}`, {useNewUrlParser: true,useCreateIndex: true,useFindAndModify: false}).then(db => console.log('BD Conectada!')).catch(err => console.log(err));",
    config = `
    require('dotenv').config();

const config = {
    port: process.env.LOCALPORT,
    db_name: process.env.DB_NAME,
    secret: process.env.SECRET
};

module.exports = { config };
    `,
    env = `
NODE_ENV=

PORT=

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

GM_USER=
GM_PASSWORD=

SECRET=
`,
    index = `const INDEX = (function(){
	return{
	}
})()`,
    mainStyl = `
@import './config/*'
@import './utils/*'
@import './objects/*'
@import './sections/*'
@import './_global.styl'
`,
    mixinsStyl = `
///////////////////////////
// FLEX CONTAINER STYLUS //
///////////////////////////
flex-container($align = center, $direction = row, $justify = center, $wrap = nowrap){
    align-items $align
    display flex
    display -webkit-box
    flex-direction $direction
    flex-wrap $wrap
    justify-content $justify
}
////////////////////////////
// POSITION-SELECT STYLUS //
////////////////////////////
position-select($x, $y = $x, $position = absolute, $left = true, $top = true){
    position $position
    // X conditionals
    if $left {
        left $x
    } else {
        right $x
    }
    // Y conditionals
    if $top {
        top $y
    } else{
        bottom $y
    }
    // Throw Error
    if $position != absolute and $position != fixed {
        error('Position-select is mented to be used only with position absolute or fixed')
    }
}
////////////////////////////
// iOS Shadow like Stylus //
////////////////////////////
my-shadow($x = 0, $y = 25px, $blur = 20px, $expand = -10px, $color= black, $alpha = 0.15){
    box-shadow $x $y $blur $expand rgba($color, $alpha)
}
`,
    utils = `const UTILS = (function(){
	return{
	}
})()`,
    logger =
        "const log = (_text, _color = 'default', _break = true, _empty = false) => {let date = new Date(),_date = `[${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}]`,_formated = `\n${_date} ${_text}\n`;if (!_break) {_formated = `${_date} ${_text}`;}if (_empty) {return console.log('\x1b[37m%s\x1b[0m', '\n');}switch (_color) {case 'yellow':return console.log('\x1b[33m%s\x1b[0m', _formated);case 'red':return console.log('\x1b[31m%s\x1b[0m', _formated);case 'blue':return console.log('\x1b[34m%s\x1b[0m', _formated);case 'purple':return console.log('\x1b[35m%s\x1b[0m', _formated);case 'green':return console.log('\x1b[32m%s\x1b[0m', _formated);default:return console.log('\x1b[37m%s\x1b[0m', _formated);}};const addZero = i => {if (i < 10) {i = '0' + i;} return i;}; module.exports = log;",
    gulpfile =
        "const gulp = require('gulp'),autoprefixer = require('gulp-autoprefixer'),babel = require('gulp-babel'),concat = require('gulp-concat'),log = require('./logger'),minify = require('gulp-minify'),rename = require('gulp-rename'),stylus = require('gulp-stylus'),sourcemaps = require('gulp-sourcemaps'),uglify = require('gulp-uglify');const $vendors = './node_modules',$cssVendorsFolder = './public/css/vendors',$jsVendorsFolder = './public/js/vendors',$tailwind = `${$vendors}/tailwindcss/dist/tailwind.min.css`,$cssVendors = [$tailwind],$rellax = `${$vendors}/rellax/rellax.min.js`,$jsVendors = [$rellax];function displayError(error) {log(error.toString(), 'red');this.emit('end');}gulp.task('stylus', () => {return gulp.src('./src/stylus/main.styl').pipe(sourcemaps.init()).pipe(stylus({compress: true})).on('error', displayError).pipe(autoprefixer({browsers: ['> 1%', 'last 3 versions', 'iOS >= 7'],cascade: true})).pipe(rename('main.min.css')).pipe(sourcemaps.write()).pipe(gulp.dest('./public/css')).on('end', () => {log('Stylus Compilado', 'green');});});gulp.task('css-vendors', () => {return gulp.src($cssVendors, { base: $vendors }).pipe(concat('cssVendors.css')).pipe(minify()).pipe(rename('vendors.min.css')).pipe(gulp.dest($cssVendorsFolder)).on('end', () => {log('Vendors (CSS) Concatenados y minificados', 'blue');});});gulp.task('js-vendors', () => {return gulp.src($jsVendors, { base: $vendors }).pipe(concat('jsVendors.js')).pipe(uglify()).pipe(rename('jsVendors.min.js')).pipe(gulp.dest($jsVendorsFolder)).on('end', () => {log('Vendors (JS) Concatenado y minificado', 'yellow');});});gulp.task('scripts', () => {return gulp.src('./src/scripts/**/*.js').pipe(sourcemaps.init()).pipe(babel({presets: ['@babel/env']})).pipe(concat('main.min.js')).pipe(uglify({mangle: {eval: true}})).on('error', displayError).pipe(sourcemaps.write()).pipe(gulp.dest('./public/js')).on('end', () => {log('Js Compilado', 'yellow');});});gulp.task('watchers', done => {log('Watchers Init', 'yellow');gulp.watch('./src/stylus/**/*.styl', gulp.series('stylus'));gulp.watch('./src/scripts/**/*.js', gulp.series('scripts'));done();});gulp.task('dev',gulp.series('stylus','css-vendors','scripts','js-vendors',gulp.parallel('watchers')));";

module.exports = {
    app: () => {
        return app;
    },
    config: () => {
        return config;
    },
    db: () => {
        return db;
    },
    empty: () => {
        return empty;
    },
    env: () => {
        return env;
    },
    gulpfile: () => {
        return gulpfile;
    },
    index: () => {
        return index;
    },
    logger: () => {
        return logger;
    },
    mainStyl: () => {
        return mainStyl;
    },
    mixinsStyl: () => {
        return mixinsStyl;
    },
    utils: () => {
        return utils;
    }
};
