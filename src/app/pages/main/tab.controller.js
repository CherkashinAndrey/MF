'use strict';

function TabController($scope, data) {
  'ngInject';

  $scope.data = data;
  $scope.gridOptions = {};
  //debugger

  $scope.gridOptions.columnDefs  = [
         { name: 'firstName' },
         { name: 'lastName', cellTemplate: '<a>$scope.data.lastName</a>'},
         { name: 'ShowScope',
            cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe(grid.renderContainers.body.visibleRowCache.indexOf(row))">Click Me</button>' }
       ];

  $scope.gridOptions.data =[];
  data.reduce((res, el) => {
  	$scope.gridOptions.data.push({
  			"firstName":  el.firstName, 
  			"lastName":  el.lastName ,
  		})
  	return $scope.gridOptions.data;
  }, [])
  

   $scope.showMe = function(index){
   		console.log(index);
   };

}

export default TabController;