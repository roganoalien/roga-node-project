// Node Modules Packages
const chalk = require('chalk'),
    clear = require('clear'),
    CLI = require('clui'),
    Spinner = CLI.Spinner,
    Progress = CLI.Progress,
    figlet = require('figlet');
// Internal files
const files = require('./lib/files'),
    inquirer = require('./lib/asking'),
    public = require('./lib/public'),
    src = require('./lib/src'),
    status = new Spinner(
        'Creando configuraciones, archivos y carpetas, porfavor espera...'
    );
let thisProgressBar = new Progress(20);
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
    // status.start();
    console.log(thisProgressBar.update(10, 40));
    public.init();
    if (configFile.fill) {
        public.fill();
    } else {
        public.empty();
    }
    console.log(thisProgressBar.update(20, 40));
    src.init();
    console.log(thisProgressBar.update(30, 40));
    console.log(
        chalk.hex('#F92A82')(
            figlet.textSync('Based on \nBootstrap \ncolor codes', {
                font: 'Stick Letters',
                horizontalLayout: 'default',
                verticalLayout: 'fitted'
            })
        )
    );
    const colorsStyl = await inquirer.askColors();
    src.colors(
        colorsStyl.primary,
        colorsStyl.secondary,
        colorsStyl.success,
        colorsStyl.danger,
        colorsStyl.warning,
        colorsStyl.info,
        colorsStyl.light,
        colorsStyl.dark,
        colorsStyl.white
    );
    console.log(thisProgressBar.update(40, 40));
};

run();
