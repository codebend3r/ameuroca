/**
 * Created by crivas on 06/07/2016.
 */

(function () {

  'use strict';

  angular.module('ameuroca', [

    'ui.router',
    'ui.router.tabs',
    'ui.bootstrap',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'jsonFormatter',
    'angular.filter'

  ]);

  angular.module('ameuroca')

    .constant('$moment', moment);

})();
