const fs = require('fs'),
    path = require('path');

const { app, env, empty, gulpfile, logger } = require('./strings');

module.exports = {
    init: () => {
        // console.log('PUBLIC FOLDER');
        fs.mkdirSync('public');
    },
    empty: async () => {
        // console.log('Public Empty');
        fs.writeFileSync('./app.js', empty());
        fs.writeFileSync('./logger.js', empty());
        fs.writeFileSync('./gulpfile.js', empty());
        fs.writeFileSync('./.env', env());
        fs.writeFileSync('./.env.example', env());
    },
    fill: async () => {
        console.log('Public Fill');
        fs.writeFileSync('./app.js', app());
        fs.writeFileSync('./logger.js', logger());
        fs.writeFileSync('./gulpfile.js', gulpfile());
        fs.writeFileSync('./.env', env());
        fs.writeFileSync('./.env.example', env());
    }
};
