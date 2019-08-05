module.exports = {
    url: 'https://test.salesforce.com/',
    elements: {
        username: '#username',
        password: '#password',
        refresh: 'dasdasdasd',
        loginbtn: '#Login',
    },

    commands: [{

        click_loginbtn() {
            return this
            .click('@loginbtn');
        }
    }]
};