/**
 * Created by Bouse on 09/01/2015
 */

(function () {

  'use strict';

  angular.module('ameuroca')

    .controller('appCtrl', function ($scope, $rootScope, $log, $q, $http, managersService) {

      // public
      // http://www.thescore.com/copam/leaders/Goals
      // http://www.thescore.com/euroc/leaders/Goals

      $scope.tabData = [
        {
          heading: 'Copa America',
          route: 'index.copa'
        },
        {
          heading: 'Euro Cup',
          route: 'index.euro'
        }
      ];

      var euroCupUrl = 'http://api.thescore.com/euroc/leaders?categories=Goals%2CAssists%2CClean+Sheets&season_type=regular';
      var copaAmericaUrl = 'http://api.thescore.com/copam/leaders?categories=Goals%2CAssists%2CClean+Sheets&season_type=regular';

      $scope.leaders = {
        copaAmerica: {},
        euroCup: {}
      };

      $http.get(copaAmericaUrl).then(function(result) {

        $scope.leaders.copaAmerica.goals = _.map(result.data.Goals, function(d) {
          return {
            rank: d.ranking,
            player: {
              name: d.player.full_name
            },
            team: {
              name: d.team.full_name,
              logo: d.team.logos.large
            },
            stat: d.stat
          };
        });

        $scope.leaders.copaAmerica.cleanSheets = _.map(result.data['Clean Sheets'], function(d) {
          return {
            rank: d.ranking,
            player: {
              name: d.player.full_name
            },
            team: {
              name: d.team.full_name,
              logo: d.team.logos.large
            },
            stat: d.stat
          };
        });

      });

      $http.get(euroCupUrl).then(function(result) {

        $scope.leaders.euroCup.goals = _.map(result.data.Goals, function(d) {
          return {
            rank: d.ranking,
            player: {
              name: d.player.full_name
            },
            team: {
              name: d.team.full_name,
              logo: d.team.logos.large
            },
            stat: d.stat
          };
        });

        $scope.leaders.euroCup.cleanSheets = _.map(result.data['Clean Sheets'], function(d) {
          return {
            rank: d.ranking,
            player: {
              name: d.player.full_name
            },
            team: {
              name: d.team.full_name,
              logo: d.team.logos.large
            },
            stat: d.stat
          };
        });

      });

      $rootScope.version = '0.0.1';

      var genericBaseUrl = 'http://api.thescore.com/soccer/players/';
      var acceptedLeagueSlugs = ['copam', 'euroc'];

      var getPlayerLog = function (leagueSlug, id) {
        return $http.get('http://api.thescore.com/' + leagueSlug.toLowerCase() + '/players/' + id + '/player_records');
      };

      var range = ['2016 06 01', '2016 07 01'];

      _.each(managersService.players, function(m) {

        _.each(m.ids, function(playerId) {

          $http.get(genericBaseUrl + playerId).then(function(result) {

            var position = result.data.position_abbreviation;
            console.debug(result.data.id, result.data.full_name, position);

            _.each(result.data.leagues, function(league) {

              if (acceptedLeagueSlugs.indexOf(league.slug) !== -1) {

                getPlayerLog(league.slug, playerId).then(function(logResults) {

                  _.each(logResults.data, function(game) {

                    console.debug('position', position);

                    if (position === 'G') {
                      console.debug('goalie', game);
                      debugger;
                      
                    } else {

                      var scoredAGoal = game.goals !== 0;
                      var gameDate = moment(new Date(game.box_score.event.game_date));
                      var start = moment(new Date(range[0]));
                      var end = moment(new Date(range[1]));

                      var isBetween = gameDate.isBetween(start, end);

                      // console.debug('isBetween:', isBetween);
                      // console.debug('scoredAGoal:', scoredAGoal);
                      // console.debug('-----------------------');

                      if (isBetween && scoredAGoal) {
                        console.debug(result.data.full_name, moment(game.box_score.event.game_date).format('YYYY/MM/DD'), game.goals);
                      }

                    }

                  });
                });
              }
            });

          });

        });

      });

      // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      //
      //   $log.debug('state changed start');
      //
      //   $scope.showSpinner();
      //
      //   if (toState.name === 'leagues') {
      //     if (!_.has(toParams, 'leagueName') || toParams.leagueName === '') {
      //       toParams.leagueName = 'epl';
      //     }
      //     $state.go('leagues.tables', {
      //       leagueName: toParams.leagueName
      //     });
      //   } else if (toState.name === 'standings') {
      //     //
      //   }
      // });
      //
      // $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
      //
      //   $log.debug('state changed success');
      //
      //   $scope.hideSpinner();
      //
      // });
      //
      // $scope.hideSpinner();

    });

})();
