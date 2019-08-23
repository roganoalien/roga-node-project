#!/usr/bin/env node
const fs = require('fs');

const empty = '';
const index = `const INDEX = (function(){
	return{
	}
})()`;
const utils = `const UTILS = (function(){
	return{
	}
})()`;
const mixinsStyl = `
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
`;
const mainStyl = `
@import './config/*'
@import './utils/*'
@import './objects/*'
@import './sections/*'
@import './_global.styl'
`;
const env = `
NODE_ENV=

PORT=

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

GM_USER=
GM_PASSWORD=

SECRET=
`;

fs.writeFileSync('./app.js', empty);
fs.writeFileSync('./logger.js', empty);
fs.writeFileSync('./gulpfile.js', empty);
fs.writeFileSync('./.env', env);
fs.writeFileSync('./.env.example', env);
fs.mkdirSync('public');
//CONFIG
fs.mkdirSync('src/config', { recursive: true });
fs.writeFileSync('src/config/config-app.js', empty);
fs.writeFileSync('src/config/config-db.js', empty);
fs.writeFileSync('src/config/config-passport.js', empty);
//MODELS
fs.mkdirSync('src/models', { recursive: true });
//ROUTES
fs.mkdirSync('src/routes', { recursive: true });
fs.writeFileSync('src/routes/routes-admin.js', empty);
fs.writeFileSync('src/routes/routes-main.js', empty);
//SCRIPTS
fs.mkdirSync('src/scripts', { recursive: true });
fs.writeFileSync('src/scripts/index.js', index);
fs.writeFileSync('src/scripts/utils.js', utils);
//STYLUS
fs.mkdirSync('src/stylus', { recursive: true });
fs.writeFileSync('src/stylus/_global.styl', empty);
fs.writeFileSync('src/stylus/main.styl', mainStyl);
//--STYLUS--CONFIG
fs.mkdirSync('src/stylus/config', { recursive: true });
fs.writeFileSync('src/stylus/config/_vars.styl', empty);
fs.writeFileSync('src/stylus/config/_fonts.styl', empty);
fs.mkdirSync('src/stylus/objects', { recursive: true });
fs.mkdirSync('src/stylus/sections', { recursive: true });
//--STYLUS--UTILS
fs.mkdirSync('src/stylus/utils', { recursive: true });
fs.writeFileSync('src/stylus/utils/_mixins.styl', mixinsStyl);
//UTILS
fs.mkdirSync('src/utils', { recursive: true });
fs.writeFileSync('src/utils/util-auth.js', utils);
//VIEWS
fs.mkdirSync('src/views', { recursive: true });
