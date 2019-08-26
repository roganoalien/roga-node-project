// Node Modules Packages
const chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet'),
    imageToAscii = require('image-to-ascii'),
    touch = require('touch');
// Internal files
const files = require('./lib/files'),
    public = require('./lib/public'),
    src = require('./lib/src');
//-- Limpia el código antes de iniciar
clear();
console.log(
    chalk.hex('#6153CC')(
        // ---- ASCII TEXT LOGO
        figlet.textSync('node project cli', {
            font: 'Small Slant',
            horizontalLayout: 'default',
            verticalLayout: 'fitted'
        })
    )
);

if (files.directoryExists('src') || files.directoryExists('public')) {
    console.log(chalk.red('¡Ya se creó un proyecto en esta carpeta!'));
    process.exit();
}

const run = () => {
    public.init();
    src.init();
};

run();
