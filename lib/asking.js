const inquirer = require('inquirer');

module.exports = {
    askConfigFiles: () => {
        const questions = [
            {
                type: 'confirm',
                name: 'fill',
                message:
                    '¿Quieres utilizar los archivos de configuración por default?',
                choices: [
                    {
                        name: 'Sí',
                        value: true,
                        short: 'S'
                    },
                    {
                        name: 'No',
                        value: false,
                        short: 'N'
                    }
                ],
                default: false
            }
        ];
        return inquirer.prompt(questions);
    }
};
