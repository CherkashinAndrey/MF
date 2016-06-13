'use strict';

function routeConfig($urlRouterProvider, $stateProvider) {
  'ngInject';
console.log(require('!!file!./pages/login/login.html'));

	$stateProvider
    .state('login', {
        url: '/login',
        // data: {
        //     roles: roles.ANONIM
        // },
        templateUrl: require('!!file!./pages/login/login.html'),
        controller: 'LoginController'
    }),
    
    // .state('login', {
    //     url: '/login',
    //     // data: {
    //     //     roles: roles.ANONIM
    //     // },
    //     templateUrl: require('!!file!./pages/login/login.html'),
    //     controller: 'LoginController'
    // }),   


    $urlRouterProvider.otherwise('/login');


}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

