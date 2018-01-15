(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryController', StoryController);

  StoryController.$inject = ['TopStoriesService'];
  function StoryController(TopStoriesService) {
    var vm = this;


    activate();

    ////////////////

    function activate() {

    }
  }
})();
