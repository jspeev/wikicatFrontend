'use strict';

angular.module('wikicatwkApp')
  .controller('MainCtrl', function ($scope,server,main) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    	
	 	$scope.Main = main;
	 	$scope.Server = server;
	 	
	 	var wikiAPIURL = "http://en.wikipedia.org/w/api.php";
	 	var catListQuery = { format: 'json', action:'query',list:'categorymembers',cmtitle:'Category:cat_breeds',cmlimit:100,prop:'revisions',rvprop:'content',continue:'' }
		
	 	$scope.Server.call(catListQuery,wikiAPIURL,cycleCatList);
	 	
	 	function cycleCatList(data){
 		
	    	$scope.aryCatBreed = data.query.categorymembers.splice(3,data.query.categorymembers.length-1);	
    		$scope.floatingCats = [];
    		
	    	var iCatNum = -1;
	    	var iCatBreedNum = -1;
	    	var timerNextCat = setInterval(function () {getNextCat();}, 1000);
	
			function getNextCat() {
			    
			    iCatNum ++;
			    iCatBreedNum ++;
			    
			    //START ALL OVER AGAIN IF END IS REACHED
			    if(iCatBreedNum === $scope.aryCatBreed.length-1)
			    	iCatBreedNum = 0;
			    ////////////////////////////////////////
			    
			    var getNextCatQuery = { format: 'json', action:'query',titles:$scope.aryCatBreed[iCatBreedNum].title,prop:'revisions|pageimages',rvprop:'content',continue:'' };
				   
 				 $scope.Server.call(getNextCatQuery,wikiAPIURL,displayNewCat);
 	
 				 function displayNewCat(data) {
			    	
			    	var pageData = data.query.pages[$scope.aryCatBreed[iCatBreedNum].pageid];
			    	
			    	if(pageData){
			    		
			    		var pageInfo = pageData.revisions[0]['*'];
				    	
				    	var resources = pageInfo.substring(0,pageInfo.indexOf('}}'));
				    	var aryResource = resources.split('|');
				    	
				    	//LAST AND FIRST RESOURCES CANNOT BE DELIMITED AND ARE REMOVED
				    	aryResource.shift();
				    	aryResource.pop();
				    	////////////////////////////////////////////////////
				    	
				    	var objResource = {};
				    	
				    	for(var iRes = 0 ; iRes < aryResource.length ; iRes ++){
				    		var aryResourcePair = aryResource[iRes].split('=');
				    		objResource[aryResourcePair[0]] = aryResourcePair[1];
				    	}
				    	
				    	objResource.summary = pageInfo.substring(pageInfo.indexOf('}}')+4,pageInfo.length);
				    	objResource.num = iCatNum;
				    	
				    	if( pageData.thumbnail ){
				    		
				    		objResource.imageSource = pageData.thumbnail.source;
					    	objResource.imageHeight = pageData.thumbnail.height;
					    	objResource.imageWidth = pageData.thumbnail.width;
					    	
							$scope.Main.floatingCats.push(objResource);
							
							$scope.$apply();
							
				    	}
			    	}
			    }
			 }
		}
  });
