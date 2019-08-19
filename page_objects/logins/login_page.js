module.exports = {
    url: 'https://test.salesforce.com/',
    elements: {
        username: '#username',
        password: '#password',
        refresh: 'dasdasdasd',
        loginbtn: '#Login',
        errorMsg1: 'div[class="modal-header slds-modal__header slds-theme--info slds-theme--alert-texture"]',
        errorMsg2: 'div[class="auraErrorBox"]',
    },

    commands: [{

        click_loginbtn() {
            return this
            .click('@loginbtn');
        }
    }]
};