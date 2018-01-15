(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService', '$scope', '$stateParams', '$location'];
  function TopStoriesController(TopStoriesService, $scope, $stateParams, $location) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
      vm.stories = [];
      $scope.updatePage = updatePage;
      $scope.currentPage = $stateParams.page || 1;
      vm.start = 30 * ($scope.currentPage - 1) + 1;

      TopStoriesService
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

      function updatePage(newPageNumber, oldPageNumber) {
        $location.url('top?page=' + newPageNumber);
        vm.start = 30 * (newPageNumber - 1) + 1;
      }

    }
  }
})();
