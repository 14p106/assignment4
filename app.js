(function (){
	angular.module("RestaurantApp", ['ui.router']);

	angular.module("RestaurantApp").config(RouteConfig);

	RouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
 
	function RouteConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {url: "/home" , templateUrl: 'index.html'})
			.state('categoriesList', {url: '/categoriesList', templateUrl: 'categoriesList.html'})
			.state('itemList', {url: '/itemList', templateUrl: 'itemList.html'});
	};
})();

// app.controller("NarrowItDownController", NarrowItDownController);

// NarrowItDownController.$inject = ["$scope", "MenuSearchService"];

// function NarrowItDownController($scope, MenuSearchService){
// 	$scope.enableItemShow = false;
// 	$scope.getItem = function(inputItem){
// 		$scope.foundItemsCtrl = [];
// 		MenuSearchService.getMatchedMenuItems(inputItem, function(response){
// 			 $scope.foundItemsCtrl = response;
// 			 console.log("foundItemsCtrl", $scope.foundItemsCtrl);
// 			 if($scope.foundItemsCtrl.length > 0){
// 			 	$scope.enableItemShow = true;
// 			 }

// 		});
// 		$scope.removeItemIndexFn = function(removeIndex){
// 			$scope.foundItemsCtrl.splice(removeIndex, 1);
// 		}

// 	};

// }


// app.service("MenuSearchService", MenuSearchService);

// MenuSearchService.$inject = ["$http"];

// function MenuSearchService($http){
// 	var foundItemsService = [];
// 		var getMatchedMenuItems =  function(data, callback){
// 			return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(result){
// 				angular.forEach(result.data.menu_items, function(value, key){
// 					if(value.name === data){
// 						foundItemsService.push(value);
// 					}
// 				});
// 				return callback(foundItemsService);
// 			});
// 		};
// 		return { getMatchedMenuItems: getMatchedMenuItems };
// };


// app.directive('foundItems', function () {
//     return {        
//         restrict: 'E',
//         scope: {
//         	foundItems : "=",
//         	onRemove : "="
//         },
//         template: "<table><tr><th>Item Name</th><th>Item Price</th></tr><tr ng-repeat='foundItems in  foundItems track by $index'><td>{{foundItems.name}}</td><td>{{foundItems.price_large}}</td><td><button class='btn btn-primary' ng-click ='removeItem($index)'>Don't want this on</button></td></br><tr></table>",
//         // template:
//         //     "<div style='display: inline-block; margin: 0px; 
//         //     padding: 0px; cursor:pointer' ng-repeat='idx in maxRatings track by $index'> \
//         //         <img ng-src='{{(rating <= $index) && 
//         //         \"Images/star-empty-lg.png\" || \"Images/star-fill-lg.png\"}}' \
//         //         ng-Click='click($index + 1)'></img> \
//         //     </div>",
//         controller: function ($scope) {
//             //$scope.$watch('foundItems', function(){
//             	console.log("foundItems", $scope.foundItems);
//             	$scope.removeItem = function(index){
//             		$scope.onRemove(index);
//             	}
//             //})
//         }
//     };
// });