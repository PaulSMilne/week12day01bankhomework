var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('./views/bankView.js');

window.onload = function () {
  var bank = new Bank();

  for (accountData of sampleAccounts){
  bank.addAccount(new Account(accountData));
  }

  var bankView = new BankView(bank);

  // bankView.renderH4TagsToHTML();
  // bankView.renderAllToHTML();
  // bankView.renderBusinessToHTML();
  // bankView.renderPersonalToHTML();

  bankView.doHTML();

  var interestButton = document.getElementById('interest');

  interestButton.onclick = function(){
     bank.interestPayment(10);
     bankView.doHTML();
     }
}