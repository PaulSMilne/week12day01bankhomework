var BankView = function(bank){
     this.bank = bank;
}

BankView.prototype = {
     renderAllToHTML(){
          var totalH4 = document.getElementById('all_accounts');
          totalH4.innerText = "All Accounts";
          var businessH4 = document.getElementById('business');
          businessH4.innerText = "Business Accounts";
          var personalH4 = document.getElementById('personal');
          personalH4.innerText = "Personal Accounts";

          var accountsTable = document.getElementById('accounts_table');

          var accountsTableTotalRow = document.createElement('tr');
          var accountsTableTotalHead = document.createElement('th');
          accountsTableTotalHead.innerText = "Total";
          var accountsTableTotalCell = document.createElement('td');
          accountsTableTotalCell.innerText = "£" + this.bank.totalCash().toFixed(2);

          accountsTableTotalRow.appendChild(accountsTableTotalHead);
          accountsTableTotalRow.appendChild(accountsTableTotalCell);

          for (account of this.bank.accounts){
            var row = document.createElement('tr');

            var head = document.createElement('th');
            head.innerText = account.owner;

            var cell = document.createElement('td');
            cell.innerText = "£" + account.amount.toFixed(2);

            row.appendChild(head);
            row.appendChild(cell);
            accountsTable.appendChild(row);
          }
          accountsTable.appendChild(accountsTableTotalRow);
     },
     renderBusinessToHTML(){
          var businessTable = document.getElementById('business_table');
          var businessTableTotalRow = document.createElement('tr');
          var businessTableTotalHead = document.createElement('th');
          var businessTableTotalCell = document.createElement('td');
          businessTableTotalHead.innerText = "Total";
          businessTableTotalCell.innerText = "£" + this.bank.totalCash("business").toFixed(2);
          businessTableTotalRow.appendChild(businessTableTotalHead);
          businessTableTotalRow.appendChild(businessTableTotalCell);

          for (account of this.bank.filteredAccounts('business')){
            var row = document.createElement('tr');

            var head = document.createElement('th');
            head.innerText = account.owner;

            var cell = document.createElement('td');
            cell.innerText = "£" + account.amount.toFixed(2);

            row.appendChild(head);
            row.appendChild(cell);
            businessTable.appendChild(row);
          }
          businessTable.appendChild(businessTableTotalRow);

     },
     renderPersonalToHTML(){
          var personalTable = document.getElementById('personal_table');
          var personalTableTotalRow = document.createElement('tr');
          var personalTableTotalHead = document.createElement('th');
          var personalTableTotalCell = document.createElement('td');
          personalTableTotalHead.innerText = "Total";
          personalTableTotalCell.innerText = "£" + this.bank.totalCash("personal").toFixed(2);
          personalTableTotalRow.appendChild(personalTableTotalHead);
          personalTableTotalRow.appendChild(personalTableTotalCell);

          for (account of this.bank.filteredAccounts('personal')){
            var row = document.createElement('tr');

            var head = document.createElement('th');
            head.innerText = account.owner;

            var cell = document.createElement('td');
            cell.innerText = "£" + account.amount.toFixed(2);

            row.appendChild(head);
            row.appendChild(cell);
            personalTable.appendChild(row);
          }
          personalTable.appendChild(personalTableTotalRow);

     }
}

module.exports = BankView;