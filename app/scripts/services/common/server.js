'use strict';

angular.module('wikicatwkApp')
  .service('server', function server() {
    
	 	this.call = function(input,url,callback){
	 		
 			$.ajax({
	    		dataType: 'jsonp',data: input,url: url,
	    		success: function(data) {
	    			callback(data);
	    		},
	    		error: function(jqXHR, textStatus, errorThrown) { 
				    	console.log('Error : '+data);
				}
			});
			
	 	};
	 	
  });
