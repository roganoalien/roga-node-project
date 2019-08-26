const fs = require('fs'),
    path = require('path');

const { empty, mainStyl, mixinsStyl, utils } = require('./strings');

module.exports = {
    init: () => {
        console.log('SRC FOLDERS');
        //CONFIG
        // fs.mkdirSync('src/config', { recursive: true });
        // fs.writeFileSync('src/config/config-app.js', empty());
        // fs.writeFileSync('src/config/config-db.js', empty());
        // fs.writeFileSync('src/config/config-passport.js', empty());
        //MODELS
        // fs.mkdirSync('src/models', { recursive: true });
        //ROUTES
        // fs.mkdirSync('src/routes', { recursive: true });
        // fs.writeFileSync('src/routes/routes-admin.js', empty());
        // fs.writeFileSync('src/routes/routes-main.js', empty());
        //SCRIPTS
        // fs.mkdirSync('src/scripts', { recursive: true });
        // fs.writeFileSync('src/scripts/index.js', empty());
        // fs.writeFileSync('src/scripts/utils.js', empty());
        //STYLUS
        // fs.mkdirSync('src/stylus', { recursive: true });
        // fs.writeFileSync('src/stylus/_global.styl', empty());
        // fs.writeFileSync('src/stylus/main.styl', mainStyl());
        //--STYLUS--CONFIG
        // fs.mkdirSync('src/stylus/config', { recursive: true });
        // fs.writeFileSync('src/stylus/config/_vars.styl', empty());
        // fs.writeFileSync('src/stylus/config/_fonts.styl', empty());
        // fs.mkdirSync('src/stylus/objects', { recursive: true });
        // fs.mkdirSync('src/stylus/sections', { recursive: true });
        //--STYLUS--UTILS
        // fs.mkdirSync('src/stylus/utils', { recursive: true });
        // fs.writeFileSync('src/stylus/utils/_mixins.styl', mixinsStyl());
        //UTILS
        // fs.mkdirSync('src/utils', { recursive: true });
        // fs.writeFileSync('src/utils/util-auth.js', utils());
        //VIEWS
        // fs.mkdirSync('src/views', { recursive: true });
    }
};
