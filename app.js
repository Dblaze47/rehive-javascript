"use strict";

window.onload = function () {

    window.rehive = new Rehive({apiVersion: 3});
};

function convertToText(data) {
    if (!data) {
        return '';
    }

    var dataString = JSON.stringify(data, null, 1);
    dataString = dataString.replace(/[{",\\}]/g, '').trim();
    return dataString;
}

function register(first_name, last_name, email, mobile, company, password1, password2,terms_and_conditions) {
    rehive.auth.register(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            mobile: mobile,
            company: company,
            password1: password1,
            password2: password2,
            terms_and_conditions: terms_and_conditions
        }).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function registerCompany(first_name, last_name, email, company, password1, password2,terms_and_conditions) {
    rehive.auth.registerCompany(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company: company,
            password1: password1,
            password2: password2,
            terms_and_conditions: terms_and_conditions
        }).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function login(user, company, password) {
    rehive.auth.login({
        user: user,
        company: company,
        password: password
    }).then(function (user) {
        document.getElementById('result').innerHTML = convertToText(user);
        console.log(user);
    }, function (err) {
        console.log(err);
    });
}

function logout() {
    rehive.auth.logout().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = res.message;
    }, function (err) {
        console.log(err);
    });
}

function logoutAll() {
    rehive.auth.logoutAll()
        .then(function (res) {
            console.log(res);
            document.getElementById('result').innerHTML = res.message;
        }, function (err) {
            console.log(err);
        });
}

function changePassword(old_password, new_password1, new_password2) {
    rehive.auth.password.change(
        {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password2
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resetPassword(user, company) {
    rehive.auth.password.reset(
        {
            user: user,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resetConfirmPassword(new_password1, new_password2, uid, token) {
    rehive.auth.password.resetConfirm(
        {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resendEmailVerification(email, company) {
    rehive.auth.email.resendEmailVerification(
        {
            email: email,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function resendMobileVerification(mobile, company) {
    rehive.auth.mobile.resendMobileVerification(
        {
            mobile: mobile,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyMobile(otp) {
    rehive.auth.mobile.verify(
        {
            otp: otp
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyEmail(key) {
    rehive.auth.email.verify(
        {
            key: key
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function getTokensList() {
    rehive.auth.tokens.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getToken(tokenKey) {
    rehive.auth.tokens.get(tokenKey).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createToken(password) {
    rehive.auth.tokens.create(
        {
            password: password
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.user);
    }, function (err) {
        console.log(err);
    });
}

function deleteToken(tokenKey) {
    rehive.auth.tokens.delete(tokenKey).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyToken(tokenKey) {
    rehive.auth.tokens.verify({token: tokenKey}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function twoFactorAuthStatus() {
    rehive.auth.mfa.status.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function viewMultiAuthSms() {
    rehive.auth.mfa.sms.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function activateTwoFactorSMSAuth(mobile_no) {
    rehive.auth.mfa.sms.enable({
        mobile_number: mobile_no
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function sendTwoFactorSMSAuth() {
    rehive.auth.mfa.sms.send().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function deactivateTwoFactorSMSAuth() {
    rehive.auth.mfa.sms.disable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function viewMultiAuthToken() {
    rehive.auth.mfa.token.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function activateTwoFactorTokenAuth() {
    rehive.auth.mfa.token.enable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function deactivateTwoFactorTokenAuth() {
    rehive.auth.mfa.token.disable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyMultiFactorOTP(token) {
    rehive.auth.mfa.verify({token: token}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function getUserProfile() {
    rehive.user.get().then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function updateUserProfile(data) {
    rehive.user.update(data).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function getUserTiers() {
    rehive.user.tiers.get().then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function getUserAddress() {
    rehive.user.address.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function updateUserAddress(data) {
    rehive.user.address.update(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserBankAccounts() {
    rehive.user.bankAccounts.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserBankAccount(bankId) {
    rehive.user.bankAccounts.get(bankId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUserBankAccount(name, number, type, bank_name, bank_code, branch_code, swift, iban, bic) {
    rehive.user.bankAccounts.create(
        {
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserBankAccount(accountId, data) {
    rehive.user.bankAccounts.update(accountId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserBankAccount(bankId) {
    rehive.user.bankAccounts.delete(bankId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserCryptoAccounts() {
    rehive.user.cryptoAccounts.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserCryptoAccount(cryptoAccountId) {
    rehive.user.cryptoAccounts.get(cryptoAccountId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUserCryptoAccounts(address, crypto_type, metadata) {
    rehive.user.cryptoAccounts.create(
        {
            address: address,
            crypto_type: crypto_type,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserCryptoAccounts(cryptoAccountId, data) {
    rehive.user.cryptoAccounts.update(cryptoAccountId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserCryptoAccounts(cryptoAccountId) {
    rehive.user.cryptoAccounts.delete(cryptoAccountId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserDocuments(obj) {
    rehive.user.documents.get(obj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserDocumentsNext() {
    rehive.user.documents.getNext().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserDocumentsPrevious() {
    rehive.user.documents.getPrevious().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserDocument(documentId) {
    rehive.user.documents.get(documentId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createDocument(document_type,metadata) {
    var fileSelected = document.getElementById("fileInput").files[0],
        formData = new FormData();

    formData.append('file', fileSelected);
    formData.append('document_type', document_type);
    formData.append('metadata', JSON.stringify(metadata));

    rehive.user.documents.create(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserEmailAddresses() {
    rehive.user.emails.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserEmailAddress(id) {
    rehive.user.emails.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUserEmailAddress(email, primary) {
    rehive.user.emails.create(
        {
            email: email,
            primary: primary
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserEmailAddress(emailId, data) {
    rehive.user.emails.update(emailId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserEmailAddress(emailId) {
    rehive.user.emails.delete(emailId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserMobileNumbers() {
    rehive.user.mobiles.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserMobileNumber(id) {
    rehive.user.mobiles.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function createUserMobileNumber(number, primary) {
    rehive.user.mobiles.create(
        {
            number: number,
            primary: primary
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserMobileNumber(mobileNumberId, data) {
    rehive.user.mobiles.update(mobileNumberId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserMobileNumber(mobileNumberId) {
    rehive.user.mobiles.delete(mobileNumberId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionsList(filters) {
    rehive.transactions.get(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionListNext() {
    rehive.transactions.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionListPrevious() {
    rehive.transactions.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTotalTransactionsList(filters) {
    rehive.transactions.getTotals(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransaction(tx_code) {
    rehive.transactions.get(tx_code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createDebit(amount, account, reference, subtype, note, metadata) {
    rehive.transactions.createDebit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createCredit(amount, account, reference, subtype, note, metadata) {
    rehive.transactions.createCredit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createTransfer(transferData) {
    rehive.transactions.createTransfer(
        transferData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function getAccountsList(filter) {
    rehive.accounts.get(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountsListNext() {
    rehive.accounts.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountsListPrevious() {
    rehive.accounts.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAccount(name, primary) {
    rehive.accounts.create({
        name: name,
        primary: primary
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAccount(reference, data) {
    rehive.accounts.update(reference,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccount(obj) {
    rehive.accounts.get(obj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesList(reference, obj) {
    rehive.accounts.currencies.get(reference, obj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesListNext() {
    rehive.accounts.currencies.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesListPrevious() {
    rehive.accounts.currencies.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function getAccountCurrency(reference, obj) {
    rehive.accounts.currencies.get(reference, obj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAccountCurrency(reference, currencyCode, data) {
    rehive.accounts.currencies.update(reference, currencyCode, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyDetails() {
    rehive.company.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyCurrencies(filters) {
    rehive.company.currencies.get(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyCurrenciesNext() {
    rehive.company.currencies.getNext().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyCurrenciesPrevious() {
    rehive.company.currencies.getPrevious().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyCurrency(currencyCode) {
    rehive.company.currencies.get(currencyCode).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyBanks() {
    rehive.company.bankAccounts.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersOverview() {
    rehive.admin.users.overview.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersList(filters) {
    rehive.admin.users.get(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersListNext() {
    rehive.admin.users.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersListPrevious() {
    rehive.admin.users.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUser(first_name, last_name, email, id_number, language, nationality, metadata, mobile_number, timezone) {
    var fileSelected = document.getElementById("userProfile").files[0],
        formData = new FormData();


    formData.append('profile', fileSelected);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('id_number', id_number);
    formData.append('language', language);
    formData.append('nationality', nationality);
    formData.append('metadata', metadata);
    formData.append('mobile_number', mobile_number);
    formData.append('timezone', timezone);


    rehive.admin.users.create(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUser(uuid) {
    rehive.admin.users.get(uuid).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUser(uuid, data) {
    var fileSelected = document.getElementById("userUpdateProfile").files[0],
        formData = new FormData();

    if(fileSelected){
        formData.append('profile', fileSelected);
    }

    for (var key in data) {
        if (data[key]) {
            formData.append(key, data[key]);
        }
    }

    rehive.admin.users.update(uuid, formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserTiers(uuid) {
    rehive.admin.users.tiers.get(uuid).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserSwitchesList(uuid,filters) {
    rehive.admin.users.switches.get(uuid,filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserSwitch(uuid, tx_type, subtype, enabled) {
    rehive.admin.users.switches.create(uuid, {tx_type: tx_type, subtype: subtype, enabled: enabled}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserSwitch(uuid, idObj) {
    rehive.admin.users.switches.get(uuid, idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserSwitch(uuid, id, data) {
    rehive.admin.users.switches.update(uuid, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserSwitch(uuid, id) {
    rehive.admin.users.switches.delete(uuid, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsList(uuid,filter) {
    rehive.admin.users.getPermissionsList(uuid,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsListNext() {
    rehive.admin.users.getPermissionsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsListPrevious() {
    rehive.admin.users.getPermissionsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserPermission(uuid,type,level) {
    rehive.admin.users.createPermission(uuid, {
        type: type,
        level: level
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermission(uuid,id) {
    rehive.admin.users.getPermission(uuid,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserPermission(uuid,id) {
    rehive.admin.users.deletePermission(uuid,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsList(uuid,filter) {
    rehive.admin.users.getPermissionGroupsList(uuid,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsListNext() {
    rehive.admin.users.getPermissionGroupsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsListPrevious() {
    rehive.admin.users.getPermissionGroupsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function addAdminUserPermissionGroup(uuid,group) {
    rehive.admin.users.addPermissionGroup(uuid, {
        group: group
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroup(uuid,name) {
    rehive.admin.users.getPermissionGroup(uuid,name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserPermissionGroup(uuid,name) {
    rehive.admin.users.deletePermissionGroup(uuid,name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesList(filter) {
    rehive.admin.users.addresses.get(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesListNext() {
    rehive.admin.users.addresses.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesListPrevious() {
    rehive.admin.users.addresses.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserAddress(uuid, line_1, line_2, city, state_province, country, postal_code, status) {
    rehive.admin.users.addresses.create(
        {
            user: uuid,
            line_1: line_1,
            line_2: line_2,
            city: city,
            state_province: state_province,
            country: country,
            postal_code: postal_code,
            status: status

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddress(id) {
    rehive.admin.users.addresses.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserAddress(id, data) {
    rehive.admin.users.addresses.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserAddress(id) {
    rehive.admin.users.addresses.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsList(filterObj) {
    rehive.admin.users.bankAccounts.get(filterObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsListNext() {
    rehive.admin.users.bankAccounts.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsListPrevious() {
    rehive.admin.users.bankAccounts.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserBankAccount(uuid, name, number, type, bank_name, bank_code, branch_code, swift, iban, bic, status) {
    rehive.admin.users.bankAccounts.create(
        {
            user: uuid,
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic,
            status: status
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccount(idObj) {
    rehive.admin.users.bankAccounts.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserBankAccount(id, data) {
    rehive.admin.users.bankAccounts.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserBankAccount(id) {
    rehive.admin.users.bankAccounts.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsList(filterObj) {
    rehive.admin.users.cryptoAccounts.get(filterObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsListNext() {
    rehive.admin.users.cryptoAccounts.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsListPrevious() {
    rehive.admin.users.cryptoAccounts.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserCryptoAccount(user, crypto_type, address, metadata, status) {
    rehive.admin.users.cryptoAccounts.create(
        {
            user: user,
            crypto_type: crypto_type,
            address: address,
            metadata: metadata,
            status: status
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccount(idObj) {
    rehive.admin.users.cryptoAccounts.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserCryptoAccount(id, data) {
    rehive.admin.users.cryptoAccounts.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserCryptoAccount(id) {
    rehive.admin.users.cryptoAccounts.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsList(filter) {
    rehive.admin.users.documents.get(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsListNext() {
    rehive.admin.users.documents.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsListPrevious() {
    rehive.admin.users.documents.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserDocument(user, document_type, metadata, note, status) {
    var fileSelected = document.getElementById("adminUserDocument").files[0],
        formData = new FormData();


    formData.append('file', fileSelected);
    formData.append('user', user);
    formData.append('document_type', document_type);
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('note', note);
    formData.append('status', status);

    rehive.admin.users.documents.create(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocument(id) {
    rehive.admin.users.documents.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserDocument(id, data) {
    var fileSelected = document.getElementById("updateAdminUserDocument").files[0],
        formData = new FormData();

    if (fileSelected) {
        formData.append('file', fileSelected);
    }

    for (var key in data) {
        if (data[key]) {
            formData.append(key, data[key]);
        }
    }

    rehive.admin.users.documents.update(id, formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserDocument(id) {
    rehive.admin.users.documents.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsList(filters) {
    rehive.admin.users.emails.get(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsListNext() {
    rehive.admin.users.emails.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsListPrevious() {
    rehive.admin.users.emails.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserEmail(user, email, primary, verified) {
    rehive.admin.users.emails.create(
        {
            user: user,
            email: email,
            primary: primary,
            verified: verified
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmail(idObj) {
    rehive.admin.users.emails.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserEmail(id, data) {
    rehive.admin.users.emails.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserEmail(id) {
    rehive.admin.users.emails.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesList(filter) {
    rehive.admin.users.mobiles.get(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesListNext() {
    rehive.admin.users.mobiles.getNext().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesListPrevious() {
    rehive.admin.users.mobiles.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserMobile(user, number, primary, verified) {
    rehive.admin.users.mobiles.create(
        {
            user: user,
            number: number,
            primary: primary,
            verified: verified
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobile(idObj) {
    rehive.admin.users.mobiles.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserMobile(id, data) {
    rehive.admin.users.mobiles.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserMobile(id) {
    rehive.admin.users.mobiles.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsList(filters) {
    rehive.admin.transactions.get(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsListNext() {
    rehive.admin.transactions.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsListPrevious() {
    rehive.admin.transactions.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsTotal(filter) {
    rehive.admin.transactions.getTotals(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransaction(id) {
    rehive.admin.transactions.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminTransaction(id, data) {
    rehive.admin.transactions.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminCreditTransaction(user, currency, amount, subtype, account, reference, metadata, note, confirm_on_create) {
    rehive.admin.transactions.createCredit(
        {
            user: user,
            currency: currency,
            amount: amount,
            subtype: subtype,
            account: account,
            reference: reference,
            metadata: metadata,
            note: note,
            confirm_on_create: confirm_on_create
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminDebitTransaction(user, currency, amount, subtype, account, reference, metadata, note, confirm_on_create) {
    rehive.admin.transactions.createDebit(
        {
            user: user,
            currency: currency,
            amount: amount,
            subtype: subtype,
            account: account,
            reference: reference,
            metadata: metadata,
            note: note,
            confirm_on_create: confirm_on_create
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminTransferTransaction(user, recipient, currency, amount, debit_subtype, debit_account,
                                        debit_note, debit_metadata, debit_reference, credit_subtype, credit_reference,
                                        credit_metadata, credit_note) {
    rehive.admin.transactions.createTransfer(
        {
            user: user,
            recipient: recipient,
            currency: currency,
            amount: amount,
            debit_subtype: debit_subtype,
            debit_account: debit_account,
            debit_note: debit_note,
            debit_metadata: debit_metadata,
            debit_reference: debit_reference,
            credit_subtype: credit_subtype,
            credit_reference: credit_reference,
            credit_metadata: credit_metadata,
            credit_note: credit_note
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsSwitchesList() {
    rehive.admin.transactions.switches.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminTransactionsSwitch(tx_type, subtype, enabled) {
    rehive.admin.transactions.switches.create(
        {
            tx_type: tx_type,
            subtype: subtype,
            enabled: enabled
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsSwitch(idObj) {
    rehive.admin.transactions.switches.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminTransactionsSwitch(id, data) {
    rehive.admin.transactions.switches.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminTransactionsSwitch(id) {
    rehive.admin.transactions.switches.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsList(filtersObj) {
    rehive.admin.accounts.get(filtersObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsListNext() {
    rehive.admin.accounts.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsListPrevious() {
    rehive.admin.accounts.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccount(user, name, primary, reference) {
    rehive.admin.accounts.create(
        {
            user: user,
            name: name,
            primary: primary,
            reference: reference
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccount(referenceObj) {
    rehive.admin.accounts.get(referenceObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccount(reference, data) {
    rehive.admin.accounts.update(reference, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesList(reference, filterObj) {
    rehive.admin.accounts.currencies.get(reference, filterObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesListNext() {
    rehive.admin.accounts.currencies.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesListPrevious() {
    rehive.admin.accounts.currencies.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrency(reference, codeObj) {
    rehive.admin.accounts.currencies.get(reference, codeObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function addAdminUsersAccountCurrency(reference, currencyObj) {
    rehive.admin.accounts.currencies.create(reference,
        {
            currencies: [currencyObj]
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrency(reference, code, data) {
    rehive.admin.accounts.currencies.update(reference, code, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyLimitsList(reference, code) {
    rehive.admin.accounts.currencies.limits.get(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencyLimit(reference, code, tx_type, value, type, subtype) {
    rehive.admin.accounts.currencies.limits.create(reference, code, {
        tx_type: tx_type,
        value: value,
        type: type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyLimit(reference, code, idObj) {
    rehive.admin.accounts.currencies.limits.get(reference, code, idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencyLimit(reference, code, id, data) {
    rehive.admin.accounts.currencies.limits.update(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencyLimit(reference, code, id) {
    rehive.admin.accounts.currencies.limits.delete(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyFeesList(reference, code) {
    rehive.admin.accounts.currencies.fees.get(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencyFee(reference, code, tx_type, value, percentage, subtype) {
    rehive.admin.accounts.currencies.fees.create(reference, code, {
        tx_type: tx_type,
        value: value,
        percentage: percentage,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyFee(reference, code, idObj) {
    rehive.admin.accounts.currencies.fees.get(reference, code, idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencyFee(reference, code, id, data) {
    rehive.admin.accounts.currencies.fees.update(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencyFee(reference, code, id) {
    rehive.admin.accounts.currencies.fees.delete(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencySwitchesList(reference, code) {
    rehive.admin.accounts.currencies.switches.get(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencySwitch(reference, code, tx_type, subtype, enabled) {
    rehive.admin.accounts.currencies.switches.create(reference, code, {
        tx_type: tx_type,
        subtype: subtype,
        enabled: enabled
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencySwitch(reference, code, idObj) {
    rehive.admin.accounts.currencies.switches.get(reference, code, idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencySwitch(reference, code, id, data) {
    rehive.admin.accounts.currencies.switches.update(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencySwitch(reference, code, id) {
    rehive.admin.accounts.currencies.switches.delete(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesList(filterObj) {
    rehive.admin.currencies.get(filterObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesListNext() {
    rehive.admin.currencies.getNext().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesListPrevious() {
    rehive.admin.currencies.getPrevious().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminCurrency(code, description, symbol, unit, divisibility) {
    rehive.admin.currencies.create(
        {
            code: code,
            description: description,
            symbol: symbol,
            unit: unit,
            divisibility: divisibility
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrency(codeObj) {
    rehive.admin.currencies.get(codeObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCurrency(code, data) {
    rehive.admin.currencies.update(code, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyOverview(code) {
    rehive.admin.currencies.overview.get(code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsList(code,filter) {
    rehive.admin.currencies.bankAccounts.get(code,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsListNext() {
    rehive.admin.currencies.bankAccounts.getNext().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsListPrevious() {
    rehive.admin.currencies.bankAccounts.getPrevious().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccount(code,idObj) {
    rehive.admin.currencies.bankAccounts.get(code,idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function addAdminCurrencyBankAccount(code,data) {
    rehive.admin.currencies.bankAccounts.create(code,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminCurrencyBankAccount(code,id) {
    rehive.admin.currencies.bankAccounts.delete(code,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCompany() {
    rehive.admin.company.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCompany(data) {
    rehive.admin.company.update(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCompanyAddress() {
    rehive.admin.company.address.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCompanyAddress(data) {
    rehive.admin.company.address.update(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminBankAccountsList() {
    rehive.admin.bankAccounts.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminBankAccount(name, number,type, bank_name, bank_code, branch_code, swift, iban, bic) {
    rehive.admin.bankAccounts.create(
        {
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminBankAccount(idObj) {
    rehive.admin.bankAccounts.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminBankAccount(id, data) {
    rehive.admin.bankAccounts.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminBankAccount(id) {
    rehive.admin.bankAccounts.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminWebhooksList(filtersObj) {
    rehive.admin.webhooks.get(filtersObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminWebhooksListNext() {
    rehive.admin.webhooks.getNext().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminWebhooksListPrevious() {
    rehive.admin.webhooks.getPrevious().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminWebhooks(url, event, secret) {
    rehive.admin.webhooks.create({
        url: url,
        event: event,
        secret: secret
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminWebhooks(idObj) {
    rehive.admin.webhooks.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminWebhooks(webhooksId, data) {
    rehive.admin.webhooks.update(webhooksId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminWebhooks(id) {
    rehive.admin.webhooks.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminSubtypesList() {
    rehive.admin.subtypes.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminSubtype(tx_type, name, label, description) {
    rehive.admin.subtypes.create(
        {
            tx_type: tx_type,
            name: name,
            label: label,
            description: description
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminSubtype(idObj) {
    rehive.admin.subtypes.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminSubtype(id, data) {
    rehive.admin.subtypes.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminSubtype(id) {
    rehive.admin.subtypes.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminNotificationsList() {
    rehive.admin.notifications.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminNotification(idObj) {
    rehive.admin.notifications.get(idObj).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminNotification(notificationId, data) {
    rehive.admin.notifications.update(notificationId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTiersList() {
    rehive.admin.tiers.getList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function createAdminTier(currency, level, name, description) {
    rehive.admin.tiers.create(
        {
            currency: currency,
            level: level,
            name: name,
            description: description
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTier(tierId) {
    rehive.admin.tiers.get(tierId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function updateAdminTier(tierId, data) {
    rehive.admin.tiers.update(tierId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function deleteAdminTier(tierId) {
    rehive.admin.tiers.delete(tierId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function getAdminTiersRequirementsList(tiersId) {
    rehive.admin.tiers.getRequirementsList(tiersId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function createAdminTierRequirements(tiersId, requirement) {
    rehive.admin.tiers.createRequirements(tiersId, {
        requirement: requirement
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierRequirement(tierId, requirementId) {
    rehive.admin.tiers.getRequirement(tierId, requirementId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function updateAdminTierRequirement(tierId, requirementId, data) {
    rehive.admin.tiers.updateRequirement(tierId, requirementId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function deleteAdminTierRequirement(tierId,requirementId) {
    rehive.admin.tiers.deleteRequirement(tierId,requirementId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}


function getAdminTiersLimitsList(tiersId) {
    rehive.admin.tiers.getLimitsList(tiersId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function createAdminTierLimit(tiersId, value, type, tx_type, subtype) {
    rehive.admin.tiers.createLimit(tiersId, {
        value: value,
        type: type,
        tx_type: tx_type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierLimit(tierId, limitId) {
    rehive.admin.tiers.getLimit(tierId, limitId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function updateAdminTierLimit(tierId, limitId,data) {
    rehive.admin.tiers.updateLimit(tierId, limitId,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function deleteAdminTierLimit(tierId, limitId) {
    rehive.admin.tiers.deleteLimit(tierId, limitId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}


function getAdminTiersFeesList(tiersId) {
    rehive.admin.tiers.getFeesList(tiersId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function createAdminTierFee(tiersId, value, percentage, tx_type, subtype) {
    rehive.admin.tiers.createFee(tiersId, {
        value: value,
        percentage: percentage,
        tx_type: tx_type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierFee(tierId, feeId) {
    rehive.admin.tiers.getFee(tierId, feeId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function updateAdminTierFee(tierId, feeId,data) {
    rehive.admin.tiers.updateFee(tierId, feeId,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function deleteAdminTierFee(tierId, feeId) {
    rehive.admin.tiers.deleteFee(tierId, feeId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}


function getAdminTiersSwitchesList(tiersId) {
    rehive.admin.tiers.getSwitchesList(tiersId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function createAdminTierSwitch(tiersId, tx_type, subtype, enabled) {
    rehive.admin.tiers.createSwitch(tiersId, {
        tx_type: tx_type,
        subtype: subtype,
        enabled:enabled
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierSwitch(tierId, switchId) {
    rehive.admin.tiers.getSwitch(tierId, switchId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function updateAdminTierSwitch(tierId, switchId, data) {
    rehive.admin.tiers.updateSwitch(tierId, switchId,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function deleteAdminTierSwitch(tierId, switchId) {
    rehive.admin.tiers.deleteSwitch(tierId, switchId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (error) {
        console.log(error);
    });
}

function getAdminGlobalSwitchesList() {
    rehive.admin.switches.getList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminGlobalSwitch(switch_type, enabled) {
    rehive.admin.switches.create(
        {
            switch_type: switch_type,
            enabled: enabled
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminGlobalSwitch(id) {
    rehive.admin.switches.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminGlobalSwitch(id, data) {
    rehive.admin.switches.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminGlobalSwitch(id) {
    rehive.admin.switches.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesList(filter) {
    rehive.admin.services.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesListNext() {
    rehive.admin.services.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesListPrevious() {
    rehive.admin.services.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminService(id) {
    rehive.admin.services.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminService(id, data) {
    rehive.admin.services.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsList(filter) {
    rehive.admin.permissionGroups.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsListNext() {
    rehive.admin.permissionGroups.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsListPrevious() {
    rehive.admin.permissionGroups.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.create(
        {
            name: name

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.get(name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminPermissionGroup(name, data) {
    rehive.admin.permissionGroups.update(name,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.delete(name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsList(name,filter) {
    rehive.admin.permissionGroups.getPermissionsList(name,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsListNext() {
    rehive.admin.permissionGroups.getPermissionsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsListPrevious() {
    rehive.admin.permissionGroups.getPermissionsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminPermissionGroupPermission(name,type,level) {
    rehive.admin.permissionGroups.createPermission(name,
        {
            type: type,
            level: level

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermission(name,id) {
    rehive.admin.permissionGroups.getPermission(name,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminPermissionGroupPermission(name,id) {
    rehive.admin.permissionGroups.deletePermission(name,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}