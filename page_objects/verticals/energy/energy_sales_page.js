
module.exports = {
    url: 'https://iselect--bat.cs6.my.salesforce.com/servlet/servlet.su?oid=00DN0000000B5GD&suorgadminid=005N0000005fV7d&retURL=%2F005%3FisUserEntityOverride%3D1%26id%3D00e28000002Rqzb%26appLayout%3Dsetup%26tour%3D%26isdtp%3Dp1%26sfdcIFrameOrigin%3Dhttps%253A%252F%252Fiselect--bat.lightning.force.com%26sfdcIFrameHost%3Dweb%26nonce%3D0134a1fdde6c58284acc47a51fc845d46135a98a782fafbaa9ab2bc21c0489c5%26ltn_app_id%3D06mN00000009bueIAA%26clc%3D1&targetURL=%2Fhome%2Fhome.jsp&',
    elements: {
        searchField: 'input[placeholder=\"Search Salesforce\"]',
        convertLead: '[title=\"Convert Lead\"]',
        searchResult: '[title=\"Automated01 Test1\"]',
        pageDescription: '[class=\"Energy Automated Test1\"]',
        newAccount: 'input[id=\"New\"]',
        convertleadBtn: 'input',
        tab0: '[data-tabid=\"ctab0\"]',
        energySales: 'div[id=\"00e28000002Rqzb_ProfileName\"]',
        viewUsers: 'div[title=\"View Users\"]',

    },

    commands: [{

        click_searchResult() {
            return this
            .click('@searchResult');
        },

        click_convertLead() {
            return this
            .click('@convertLead');
        },
        click_profiles() {
            return this
            .click('@profilesDropdown');
        },

        click_tab0() {
            return this
            .click('@tab0');
        },

        click_newAccount() {
            return this
            .click('@newAccount');
        }
    }]
};

