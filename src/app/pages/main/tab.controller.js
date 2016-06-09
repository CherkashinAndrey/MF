'use strict';

function TabController($log, $scope) {
  'ngInject';

  $scope.myData = [
            {
                "firstName": "111",
                "lastName": "2222",
                "company": "3333",
                "employed": true
            },
            {
                "firstName": "4Lorraine",
                "lastName": "4Wise",
                "company": "4Comveyer",
                "employed": false
            },
            {
                "firstName": "5Nancy",
                "lastName": "5Waters",
                "company": "5Fuelton",
                "employed": false
            }
        ];

}

export default TabController;