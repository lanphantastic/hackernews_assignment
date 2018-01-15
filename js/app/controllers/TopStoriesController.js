(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService', '$scope'];
  function TopStoriesController(TopStoriesService, $scope) {

    var vm = this;


    activate();

    ////////////////

    function activate() {
      vm.stories = [];
      $scope.updatePage = updatePage;
      vm.start;

      TopStoriesService
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

      function updatePage(newPageNumber, oldPageNumber) {
        vm.start = 30 * (newPageNumber - 1) + 1;
        console.log(vm.start);
      }

    }
  }

})();
