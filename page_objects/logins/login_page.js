const url = function() {
    return 'https://test.salesforce.com/'
}

const elements = {
    username: '#username',
    password: '#password',
    refresh: 'dasdasdasd',
    loginbtn: '#Login',
    errorMsg1: 'div[class="modal-header slds-modal__header slds-theme--info slds-theme--alert-texture"]',
    errorMsg2: 'div[class="auraErrorBox"]',
    errorMsg3: '[class="summary"]',
    errorMsg4: '',
    errorMsg4: 'div[class="modal-header slds-modal__header"]',
}

const commands = {}
commands['userLogin'] = function(username, password) {
    return this
        .navigate()
        .setValue('@username', username)
        .setValue('@password', password)
        .click('@loginbtn')
}

module.exports = {
    url: url,
    elements: elements,
    commands: [commands]
}

