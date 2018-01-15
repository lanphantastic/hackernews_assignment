(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService', '$scope', '$stateParams'];
  function TopStoriesController(TopStoriesService, $scope, $stateParams) {

    var vm = this;


    activate();

    ////////////////

    function activate() {
      vm.stories = [];
      $scope.currentPage = $stateParams.page || 1;
      $scope.updatePage = updatePage;
      vm.start = 30 * ($scope.currentPage - 1) + 1;

      TopStoriesService
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

      function updatePage(newPageNumber, oldPageNumber) {
        vm.start = 30 * (newPageNumber - 1) + 1;
      }

    }
  }

})();
