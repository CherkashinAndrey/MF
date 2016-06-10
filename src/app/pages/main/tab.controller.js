'use strict';

function TabController($scope, data) {
  'ngInject';

  $scope.myData = data;
        console.log($scope.myData);

}

export default TabController;