/**
 * Created by crivas on 06/07/2016.
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .config(function ($stateProvider, $urlRouterProvider) {

      // $urlRouterProvider.when('', '/index');
      // $urlRouterProvider.when('/', '/index');

      $urlRouterProvider.otherwise('/index/copa/goals');

      $stateProvider
        .state('app', {
          abstract: true,
          template: '<ui-view />',
          controller: 'appCtrl'
        })
        .state('index', {
          url: '/index',
          parent: 'app',
          templateUrl: 'views/index.html'
        })
        .state('index.copa', {
          url: '/copa',
          templateUrl: 'views/copa.html'
        })
				.state('index.copa.goals', {
          url: '/goals',
          templateUrl: 'views/copa-goals.html'
        })
				.state('index.copa.cleansheets', {
          url: '/cleansheets',
          templateUrl: 'views/copa-cleansheets.html'
        })
        .state('index.euro', {
          url: '/euro',
          templateUrl: 'views/euro.html'
        });

    });

})();
