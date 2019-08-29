// Node Modules Packages
const chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet'),
    imageToAscii = require('image-to-ascii'),
    touch = require('touch');
// Internal files
const files = require('./lib/files'),
    inquirer = require('./lib/asking'),
    public = require('./lib/public'),
    src = require('./lib/src');
//-- Limpia el código antes de iniciar
clear();
console.log(
    chalk.hex('#F92A82')(
        // ---- ASCII TEXT LOGO
        figlet.textSync('RGB-CLI', {
            font: '3D-ASCII',
            horizontalLayout: 'default',
            verticalLayout: 'fitted'
        })
    )
);

if (files.directoryExists('src') && files.directoryExists('public')) {
    console.log(chalk.red('¡Ya se creó un proyecto en esta carpeta!'));
    process.exit();
}

const run = async () => {
    const configFile = await inquirer.askConfigFiles();
    console.log(configFile);
    if (configFile.fill) {
        public.fill();
    } else {
        public.empty();
    }
    public.init();
    src.init();
};

run();
