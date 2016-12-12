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

  bankView.renderAllToHTML();
  bankView.renderBusinessToHTML();
  bankView.renderPersonalToHTML();



  // var businessTable = document.getElementById('business_table');

// var businessTableTotalRow = document.createElement('tr');
// var businessTableTotalHead = document.createElement('th');
// var businessTableTotalCell = document.createElement('td');
// businessTableTotalHead.innerText = "Total";
// businessTableTotalCell.innerText = "£" + bank.totalCash("business").toFixed(2);
// businessTableTotalRow.appendChild(businessTableTotalHead);
// businessTableTotalRow.appendChild(businessTableTotalCell);

// for (account of bank.filteredAccounts('business')){
//   var row = document.createElement('tr');

//   var head = document.createElement('th');
//   head.innerText = account.owner;

//   var cell = document.createElement('td');
//   cell.innerText = "£" + account.amount.toFixed(2);

//   row.appendChild(head);
//   row.appendChild(cell);
//   businessTable.appendChild(row);
// }
// businessTable.appendChild(businessTableTotalRow);

///////////////////////




}