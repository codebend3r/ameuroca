/**
 * Created by Bouse on 09/01/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .factory('managersService', function ($rootScope) {

      /**
       * TODO
       */
      var allManagers = {

        managers: {
          M001: {
            managerName: 'Chester',
            teamName: 'Reality Kings'
          },
          M002: {
            managerName: 'Frank',
            teamName: 'Schiraldihno'
          },
          M003: {
            managerName: 'Dan',
            teamName: 'Dan'
          },
          M004: {
            managerName: 'Justin',
            teamName: 'Justin'
          },
          M005: {
            managerName: 'Mike',
            teamName: 'Mike'
          },
          M006: {
            managerName: 'Mark',
            teamName: 'Mark'
          },
          M007: {
            managerName: 'Mau',
            teamName: 'Mau'
          },
          M008: {
            managerName: 'Stephen',
            teamName: 'Stephen'
          },
          M009: {
            managerName: 'Sav',
            teamName: 'Sav'
          },
          M010: {
            managerName: 'Christian',
            teamName: 'Christian'
          }
        },

        players: {
          M001: {
            ids: [12229, 3804, 16498, 50273, 17462]
          }
        },

        /**
         * @name findPlayerInManagers
         * @description looks through all the managers and returns the matching manager if player belong to a manager
         * @param id
         * @returns {manager}
         */
        findPlayerInManagers: function (id) {

          var matchingManager = null;
          var matchingPlayer = null;

          //var combinedManagers = _.defaults({}, $rootScope.managerData.data, $rootScope.managerPlayers.data);

          _.some($rootScope.managerPlayers.data, function (m, key) {
            //var currentManager = _.defaults({}, $rootScope.managerData.data, $rootScope.managerPlayers.data)[key];
            //$log.debug('currentManager', currentManager);
            return _.isDefined(m.players[id]) && (matchingManager = m) && (matchingPlayer = m.players[id]);
          });

          return {
            manager: matchingManager,
            player: matchingPlayer
          };

        }

      };

      return allManagers;

    });

})();
