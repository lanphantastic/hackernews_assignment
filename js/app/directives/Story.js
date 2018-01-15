(function() {
  'use strict';

  angular
    .module('app')
    .directive('story', story);

  story.$inject = ['TopStoriesService'];
  function story(TopStoriesService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        bindToController: true,
        controller: StoryDirectiveController,
        controllerAs: 'vm',
        link: link,
        templateUrl: 'views/story.html',
        restrict: 'E',
        scope: {
          id: '=id'
        }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function StoryDirectiveController (TopStoriesService) {
    var vm = this;

    function getDomainFromUrl(url) {
      var a = document.createElement('a');
      a.setAttribute('href', url);
      if (a.hostname === 'news.ycombinator.com') {
        return '';
      } else {
        return '(' + a.hostname + ')';
      }
    }

    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.story = res.data;
        vm.title = vm.story.title;
        vm.url = vm.story.url;
        if(!vm.url) {
          vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id;
        }
        vm.domain = getDomainFromUrl(vm.url);
        vm.score = vm.story.score;
        vm.author = vm.story.by;
      })
  }
})();
