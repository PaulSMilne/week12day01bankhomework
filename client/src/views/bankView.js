var BankView = function(bank){
     this.bank = bank;
}

BankView.prototype = {
          renderH4TagsToHTML(){
               var totalH4 = document.getElementById('all_accounts');
               totalH4.innerText = "All Accounts";
               var businessH4 = document.getElementById('business');
               businessH4.innerText = "Business Accounts";
               var personalH4 = document.getElementById('personal');
               personalH4.innerText = "Personal Accounts";
          },

          tableBuilder(accounts, table){
               for (account of accounts) {
                    var row = document.createElement('tr');
                    var head = document.createElement('th');
                    var cell = document.createElement('td');

                    head.innerText = account.owner;
                    cell.innerText = "£" + account.amount.toFixed(2);

                    row.appendChild(head);
                    row.appendChild(cell);

                    table.appendChild(row);
               }
          },

          renderAllToHTML(){

          var accountsTable = document.getElementById('accounts_table');

          var accountsTableTotalRow = document.createElement('tr');
          var accountsTableTotalHead = document.createElement('th');
          accountsTableTotalHead.innerText = "Total";
          var accountsTableTotalCell = document.createElement('td');
          accountsTableTotalCell.innerText = "£" + this.bank.totalCash().toFixed(2);

          accountsTableTotalRow.appendChild(accountsTableTotalHead);
          accountsTableTotalRow.appendChild(accountsTableTotalCell);

          this.tableBuilder(this.bank.accounts, accountsTable);

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

          this.tableBuilder(this.bank.filteredAccounts('business'), businessTable);

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

          this.tableBuilder(this.bank.filteredAccounts('personal'), personalTable);

          personalTable.appendChild(personalTableTotalRow);
     },

     doHTML(){
          this.renderH4TagsToHTML();
          this.renderAllToHTML();
          this.renderBusinessToHTML();
          this.renderPersonalToHTML();

     }
}

module.exports = BankView;