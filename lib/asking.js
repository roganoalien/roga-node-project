const inquirer = require('inquirer');

module.exports = {
    askConfigFiles: () => {
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
    }
};
