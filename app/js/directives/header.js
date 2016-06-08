/**
 * Created by Bouse on 09/01/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .directive('header', function () {

      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/directives/header.html',
        scope: true,
        controller: function ($scope) {

          $scope.menuOptions = [
            {
              name: 'Standings',
              url: 'index',
              active: true
            }
          ];

        }
      };

    });

})();
