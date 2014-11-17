'use strict';

angular.module('wikicatwkApp')
  .directive('floatcat', function () {
    return {
     
		scope:{id:'@id',name:'@name',imgURL:'@imgurl',articlesummary:'@summary',imgHeight:'@imgheight',imgWidth:'@imgwidth'},
		templateUrl: 'views/main/floatcat.html',
		restrict: 'E',
		controller: function ($scope,main) {
			
			$scope.Main = main;

			var jqFloatCat;
			
			setTimeout(function(){
				//INITIALIZE
				jqFloatCat = $('#inner'+$scope.id);
				
				jqFloatCat.css('left',(window.innerWidth/2)+'px');
				jqFloatCat.css('top',(window.innerHeight/2)+'px');
				
				jqFloatCat.css('left',(Math.round(Math.random()*window.innerWidth/2+window.innerWidth/2))+'px');
				jqFloatCat.css('top',(Math.round(Math.random()*window.innerHeight))+'px');
				jqFloatCat.animate({opacity:1,left:(Math.round(Math.random()*window.innerWidth/2+window.innerWidth/2)),top:(Math.round(Math.random()*window.innerHeight))},10000);
				
			}, 300);
			
			setTimeout(function(){
				//UNLOAD
				jqFloatCat.animate({opacity:0},500,function(){
					$scope.Main.floatingCats.shift();
				});
				
			}, 10000);
			
			$scope.catClick = function(){
				//UPDATE SUMMARY TEXT
				$scope.Main.stSummary = $scope.articlesummary;
				
			}
			
		}
			
    };
    
  });
