'use strict';

import mainTpl from './main.html';


function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: mainTpl,
      controller: require('./main.controller')
    })

    .state('main.in', {
            url: "in",
            templateUrl: require("!!file!./../../template/tabs.html"),
            controller: require('./tab.controller'),
            restrict: 'E',
            resolve: {
              data: function(tab) {
                'ngInject';
                  return tab.getIn();
              }
            }
    })

    .state('main.out', {
            url: "out",
            templateUrl: require("!!file!./../../template/tabs.html"),
            controller: require('./tab.controller'),
            restrict: 'E',
            resolve: {
              data: function(tab) {
                'ngInject';
                  return tab.getOut();
              }
            }
    })

    .state('main.arhiv', {
            url: "arhiv",
            templateUrl:  require("!!file!./../../template/tabs.html"),
            controller: require('./tab.controller'),
            restrict: 'E',
            resolve: {
              data: function(tab) {
                'ngInject';
                  return tab.getarhiv();
              }
            }
    })



    // .state(states.SITE, {
    //   'abstract': true,
    //   resolve: {
    //     user : sailsResolverProvider.loadUser
    //   }
    // })


    // .state(states.ADMIN, {
    //   parent: states.SITE,
    //   url: '/admin',
    //   data: {
    //       roles: roles.ADMIN
    //   },
    //   resolve: {
    //     asyncPreloading: resolverProvider.adminPagePrealoading,
    //     userData : function(sailsService) {
    //       return sailsService.getUsers()
    //     }
    //   },
    //   views: {
    //     'content@': {
    //       templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/admin/vv.html'),
    //       controller: 'VvController',
    //       controllerAs: 'admin'
    //       }
    //   }
    // })

    // .state(states.MANAGER, {
    //   parent: states.SITE,
    //   url: '/manager',
    //   data: {
    //       roles: roles.MANAGER
    //   },
    //   resolve: {
    //     asyncPreloading: resolverProvider.managerPagePrealoading,
    //     //userList : sailsResolverProvider.getUsersList,
    //     userData : function(sailsService) {
    //       return sailsService.getUsers()
    //     }
    //   },

    //   views: {
    //     'content@': {
    //       templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/manager/manager.html'),
    //       controller: 'ManagerController',
    //       controllerAs: 'manager'
    //       }
    //   }
    // })

    // .state(states.SETTINGS, {
    //   parent: states.SITE,
    //   url: '/settings',
    //   data: {
    //       roles: roles.MANAGER
    //   },
    //   resolve: {
    //     asyncPreloading: resolverProvider.adminPagePrealoading,
    //     userData : function(sailsService) {
    //       return sailsService.getUsers()
    //     }
    //   },
    //   views: {
    //     'content@': {
    //       templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/admin/vv.html'),
    //       controller: 'VvController',
    //       controllerAs: 'admin'
    //       }
    //   }
    // });


 

    

}

export default routeConfig;
