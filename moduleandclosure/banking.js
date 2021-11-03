var accountInfoList = [];
var accountModule = (function() {
    var account = {
        accountName: '',
        deposit: 0
    };
    var createAccount = function(accountName, deposit) {
        var newAcc = Object.create(account);
        newAcc.accountName = accountName;
        newAcc.deposit = deposit;
        return newAcc;
    }
    return {
        createAccount: createAccount
    };

})();

window.onload = function() {
    var btnaddaccount = document.getElementById("addAcctBtn");
    btnaddaccount.onclick = addAcct;
}

function addAcct() {
    let accountNameInput = document.getElementById("name");
    let depositInput = document.getElementById("deposit");
    const accountName = accountNameInput.value.trim();
    const deposit = depositInput.value.trim();

    if (accountName === '' || deposit === '') {
        alert("Please enter account name and deposit");
        return;
    }
    var newAccount = accountModule.createAccount(accountName, deposit);
    accountInfoList.push(newAccount);
    let textarea = document.getElementById("accounts");
    textarea.value = '';
    for (let i = 0; i < accountInfoList.length; i++) {
        textarea.value += "\n Account name: " + accountInfoList[i].accountName + " Balance: " + accountInfoList[i].deposit;
    }

}