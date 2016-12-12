/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var sampleAccounts = __webpack_require__(2);
	var Account = __webpack_require__(3);
	var BankView = __webpack_require__(4);
	
	window.onload = function () {
	  var bank = new Bank();
	
	  for (accountData of sampleAccounts){
	  bank.addAccount(new Account(accountData));
	  }
	
	  var bankView = new BankView(bank);
	
	  bankView.renderH4TagsToHTML();
	  bankView.renderAllToHTML();
	  bankView.renderBusinessToHTML();
	  bankView.renderPersonalToHTML();
	
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function() {
	  this.accounts = [];
	};
	
	Bank.prototype = {
	  addAccount: function(account) {
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName) {
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName) {
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type) {
	    if(!type) return this.accounts;
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type) {
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function() {
	    return this.totalCash()/this.accounts.length;
	  }
	};
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "Jay",
	  "amount": 125.50,
	  "type": "personal"
	  },
	  { "owner": "Val",
	  "amount": 55125.10,
	  "type": "personal"
	  },
	  { "owner": "Marc",
	  "amount": 400.00,
	  "type": "personal"
	  },
	  { "owner": "Keith",
	  "amount": 220.25,
	  "type": "business"
	  },
	  { "owner": "Rick",
	  "amount": 101.00,
	  "type": "business"
	  },
	  { "owner": "Bertie",
	  "amount": 500.76,
	  "type": "personal"
	  },
	  { "owner": "Jo",
	  "amount": 115.15,
	  "type": "personal"
	  },
	  { "owner": "Cookie",
	  "amount": 1922.37,
	  "type": "personal"
	  },
	  { "owner": "Sian",
	  "amount": 723.44,
	  "type": "business"
	  },
	  { "owner": "Allan",
	  "amount": 109927.73,
	  "type": "business"
	  }
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Account = function(params) {
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	     }
	}
	
	module.exports = BankView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map