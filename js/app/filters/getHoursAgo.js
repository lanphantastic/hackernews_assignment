angular
  .module('app')
  .filter('getHoursAgo', getHoursAgo);

  function getHoursAgo() {
    return function(input) {
      if (!isNaN(parseFloat(input) && isFinite(input)) {
        var secondDifference = (Date.now()/1000) - input;

        if (secondDifference < 3600) {
          var minutesAgo = secondDifference/60;
          return Math.floor(minutesAgo) + ' minutes ago';
        } else {
          var hoursAgo = secondDifference/3600;
          return Math.floor(hoursAgo) + ' hours ago';
        }
      } else {
        throw new Error('getHoursAgoFilter must be given a number as an input.');
      }
    };
};
