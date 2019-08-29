const inquirer = require('inquirer');

module.exports = {
    askConfigFiles: function() {
        const questions = [
            {
                type: 'confirm',
                name: 'fill',
                message: 'Do you want to use default configuration?',
                choices: [
                    {
                        name: 'Yes',
                        value: true,
                        short: 'Y'
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
    },
    askColors: function() {
        const colors = [
            {
                type: 'input',
                name: 'primary',
                message: 'Primary color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'secondary',
                message: 'Secondary color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'success',
                message: 'Success color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'danger',
                message: 'Danger color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'warning',
                message: 'Warning color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'info',
                message: 'Info color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'light',
                message: 'Light color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'dark',
                message: 'Dark color?(HEX code without #)',
                default: false
            },
            {
                type: 'input',
                name: 'white',
                message: 'White color?(HEX code without #)',
                default: false
            }
        ];
        return inquirer.prompt(colors);
    }
};
