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
            ids: [
							16498,
							3804,
							12229,
							7611,
							10712,
							267,
							61575,
							50273,
							23075,
							49292,
							33590,
							1177,
							3206,
							17462,
							27742,
							29590,
							12676
						],
            names: [
							'Jamie Vardy',
							'Harry Kane',
							'James Rodriguez',
							'Lorenzo Insigne',
							'Mauicio Pinilla',
							'Marek Hamsik',
							'Renato Sanches',
							'Bobby Wood',
							'Antonio Sanabria',
							'Rondon',
							'Babacan',
							'Filipe Luis',
							'Piszczek'
						]
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
