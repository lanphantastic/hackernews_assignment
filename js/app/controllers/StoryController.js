(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryController', StoryController);

  StoryController.$inject = ['TopStoriesService', '$stateParams'];
  function StoryController(TopStoriesService, $stateParams) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
      vm.id = $stateParams.id;
    }
  }
})();
