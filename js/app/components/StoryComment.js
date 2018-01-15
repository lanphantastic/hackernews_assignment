(function() {
  'use strict';
  // Usage:
  //
  // Creates:
  //

  var StoryComment = {
    bindings: {
      id: '='
    },
    templateUrl: 'views/story-comment.html',
    controller: StoryCommentController,
    controllerAs: 'vm'
  };

  StoryCommentController.$inject = ['TopStoriesService']
  function StoryCommentController (TopStoriesService) {
    var vm = this;
    vm.comment;
    vm.commentText;
    vm.commentAuthor;
    vm.commentTime;

    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.commentText = res.data.text;
        vm.commentAuthor = res.data.by;
        vm.commentTime = res.data.time;
      });
  }

  angular
    .module('app')
    .component('storyComment', StoryComment);

})();
