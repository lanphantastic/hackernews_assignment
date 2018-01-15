(function() {
'use strict';

  angular
    .module('app', ['ui.router', 'angularUtils.directives.dirPagination']) 
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('top', {
          url: '/top?page',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController as vm'
        })
        .state('post', {
          url: '/post?id',
          templateUrl: 'views/story-comments.html',
          controller: 'StoryController as vm',
          resolve: {
            story: function(TopStoriesService, $stateParams){
              return TopStoriesService.getStory($stateParams.id);
            }
          }
        })
      $urlRouterProvider.otherwise('/top');
    });
})();
