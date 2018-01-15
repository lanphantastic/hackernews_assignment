
angular
  .module('app')
  .filter('getDomainFromUrl', getDomainFromUrl);

  function getDomainFromUrl() {
    return function(input) {
      if (typeof input === 'string') {
        var a = document.createElement('a');
        a.setAttribute('href', input);
        if (a.hostname === 'news.ycombinator.com') {
          return '';
        } else {
          return '(' + a.hostname + ')';
        }
      } else {
        throw new Error('getDomainFromUrlFilter must be given a string as an input.');
      }
    };
};
