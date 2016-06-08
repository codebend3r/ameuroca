/**
 * Created by Bouse on 10/25/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .directive('chlgTable', function () {

      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/directives/chlg-table.html',
        scope: true
      };

    });

})();
