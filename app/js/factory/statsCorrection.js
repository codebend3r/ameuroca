/**
 * Created by Bouse on 12/30/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .factory('statsCorrection', function () {

      var statsCorrection = {};

      statsCorrection.events = {
        seri: {},
        epl: {},
        liga: {},
        chlg: {},
        euro: {}
      };

      return statsCorrection;

    });

})();