'use strict';

import mainTpl from './main.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: mainTpl,
      controller: require('./main.controller')
      //controllerAs: 'main',
    })

    .state('out', {
      url: '/out',
      template: "<div>sdfasdfa</div>",
      controller: require('./tab.controller')
      //controllerAs: 'main',
    })

}

export default routeConfig;
