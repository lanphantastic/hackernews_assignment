angular
  .module('app')
  .filter('getNumComments', getNumComments);

  function getNumComments() {
    return function(input) {
      if (!input || input.length === 0) {
        return 'discuss';
      } else if (input.length === 1) {
        return '1 comment';
      } else {
        return input.length + ' comments';
      }
    };
};
