(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryController', StoryController);

  StoryController.$inject = ['TopStoriesService', '$stateParams', 'story'];
  function StoryController(TopStoriesService, $stateParams, story) {
    var vm = this;
    // vm.id;



    activate();

    ////////////////

    function activate() {
      vm.id = $stateParams.id;
      vm.story = story.data;
      vm.comments = story.data.kids;


    }
  }
})();
