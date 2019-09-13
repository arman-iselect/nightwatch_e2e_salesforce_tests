module.exports = 
{
    url: 'https://test.salesforce.com/',
    elements: {
        username: '#username',
        password: '#password',
        refresh: 'dasdasdasd',
        loginbtn: '#Login',
        errorMsg1: 'div[class="modal-header slds-modal__header slds-theme--info slds-theme--alert-texture"]',
        errorMsg2: 'div[class="auraErrorBox"]',
        errorMsg3: '[class="summary"]',
        errorMsg4: '',
        errorMsg4: 'div[class="modal-header slds-modal__header"]',
    },

    commands: 
    {

        click_loginbtn() 
        {
            return this
            .click('@loginbtn');
        },

       /* login_admin = function(username, password)
        {
            this
            .setvalue('@username')
            .setvalue('@password')
            .click('@loginbtn')
            return this;
        }*/
    }
};