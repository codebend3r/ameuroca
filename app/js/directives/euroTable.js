/**
 * Created by Bouse on 10/25/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .directive('euroTable', function () {

      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/directives/euro-table.html',
        scope: true
      };

    });

})();
