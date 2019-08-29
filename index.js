#!/usr/bin/env node

// Node Modules Packages
const chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet');
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
//-- Verifica si existen las carpetas y si existen, entonces termina el proceso
if (files.directoryExists('src') && files.directoryExists('public')) {
    console.log(chalk.red('¡Ya se creó un proyecto en esta carpeta!'));
    process.exit();
}

const run = async () => {
    //-- Lanza la primer pregutna
    const configFile = await inquirer.askConfigFiles();
    public.init();
    if (configFile.fill) {
        public.fill();
    } else {
        public.empty();
    }
    src.init();
    console.log(
        chalk.hex('#F92A82')(
            figlet.textSync('Based on Bootstrap \ncolor codes', {
                font: 'Stick Letters',
                horizontalLayout: 'default',
                verticalLayout: 'fitted'
            })
        )
    );
    //-- Lanza las preguntas de los colores
    const colorsStyl = await inquirer.askColors();
    //-- Llena los colores en un .styl
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
};

run();
