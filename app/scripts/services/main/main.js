'use strict';

angular.module('wikicatwkApp')
  .service('main', function main() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    	this.stSummary = "Click on a cat to view summary";
		this.floatingCats = [];
		
  });
