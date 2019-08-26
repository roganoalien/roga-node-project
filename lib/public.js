const fs = require('fs'),
    path = require('path');

const { env, empty } = require('./strings');

module.exports = {
    init: () => {
        console.log('PUBLIC FOLDER');
        fs.mkdirSync('public');
    },
    empty: () => {
        console.log('Public Empty');
        // fs.writeFileSync('./app.js', empty());
        // fs.writeFileSync('./logger.js', empty());
        // fs.writeFileSync('./gulpfile.js', empty());
        // fs.writeFileSync('./.env', env());
        // fs.writeFileSync('./.env.example', env());
    },
    fill: () => {
        console.log('Public Fill');
    }
};
