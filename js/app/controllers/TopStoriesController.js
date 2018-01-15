(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService'];
  function TopStoriesController(TopStoriesService) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
      // vm.stories = [];

      TopStoriesService
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

    }
  }
})();
