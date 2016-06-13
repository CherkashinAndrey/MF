'use strict';

function MainController($log, $scope) {
  'ngInject';

  // $log.debug('Hello from main controller!');

  $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];

        console.log($scope.myData);
}

export default MainController;
