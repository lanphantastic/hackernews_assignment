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
      $scope.currentPage = $stateParams.page || 1;
      $scope.updatePage = updatePage;
      vm.start = ($scope.currentPage - 1) * 30 + 1;

      TopStoriesService
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

      function updatePage(newPageNumber, oldPageNumber) {
        $location.path(newPageNumber);
        vm.start = (newPageNumber - 1) * 30 + 1;
      }

    }
  }
})();
