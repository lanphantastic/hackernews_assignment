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
      var hideLink = element[0].querySelector('.hide');

      hideLink.addEventListener('click', function(event){
        element.parent().remove();
      });

      scope.$on('$destroy', function(){
        element.off();
      });
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

    function getHoursAgo(seconds) {
      var secondDifference = (Date.now()/1000) - seconds;
      if (secondDifference < 3600) {
        var minutesAgo = secondDifference/60;
        return Math.floor(minutesAgo) + ' minutes ago';
      } else {
        var hoursAgo = secondDifference/3600;
        return Math.floor(hoursAgo) + ' hours ago';
      }
    }

    function getNumComments(comments) {
      if ( !comments || comments.length === 0 ) {
        return 'discuss';
      } else if (comments.length === 1) {
        return '1 comment';
      } else {
        return comments.length + ' comments';
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
        vm.time = getHoursAgo(vm.story.time);
        vm.numComments = getNumComments(vm.story.kids);
      })
  }
})();
