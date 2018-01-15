(function() {
'use strict';

  angular
    .module('app', ['ui.router', 'angularUtils.directives.dirPagination'])
    .config(function($stateProvider){
      $stateProvider
        .state('top', {
          url: '/:page',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController as vm'
        })
        .state('otherwise', {
          url: '',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController as vm'
        })
    });
})();
