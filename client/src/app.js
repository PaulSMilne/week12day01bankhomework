var Bank = require('./bank/bank.js');
var BankView = require('./views/bankView.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('../sample.json');

window.onload = function() {
  console.log('loaded');
  var bank = new Bank();

  for (accountData of sampleAccounts){
     bank.addAccount(new Account(accountData));
  }
  console.log("We created a new bank:", bank);

  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "All Accounts";

  var accountList = document.getElementById('accounts');

  for (account of bank.accounts) {
     var accountListItem = document.createElement('li');
     accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
     accountList.appendChild(accountListItem);
  }

  var businessTotal = document.getElementById('business_total');
  var personalTotal = document.getElementById('personal_total');
  var businessList = document.getElementById('business_accounts');
  var personalList = document.getElementById('personal_accounts');

  var totalBusiness = bank.totalCash("business");
  var totalPersonal = bank.totalCash("personal");

  businessTotal.innerText = "Total Business Cash: £" + totalBusiness.toFixed(2);


  var businessAccounts = bank.filteredAccounts("business");
  var personalAccounts = bank.filteredAccounts("personal");

  for (businessAccount of businessAccounts) {
     var accountListItem = document.createElement('li');
     accountListItem.innerText = businessAccount.owner + ": £" + businessAccount.amount.toFixed(2);
     businessList.appendChild(accountListItem);
  }



  var personalTable = document.getElementById('personal_table');

  for (personalAccount of personalAccounts) {
     var row = document.createElement('tr');
     var head = document.createElement('th');
     var cell = document.createElement('td');

     head.innerText = personalAccount.owner;
     cell.innerText = "£" + personalAccount.amount.toFixed(2);
     row.appendChild(head);
     row.appendChild(cell);
     personalTable.appendChild(row);
  }
  var totalRow = document.createElement('tr');
  var totalHead = document.createElement('th');
  totalHead.innerText = "Total";
  var totalCell = document.createElement('td');
  totalCell.innerText = "£" + totalPersonal.toFixed(2);
  totalRow.appendChild(totalHead);
  totalRow.appendChild(totalCell);
  personalTable.appendChild(totalRow);



}
}
