var ghpages = require('gh-pages');

ghpages.publish('public', {
  branch: 'gh-pages',
  repo: 'https://github.com/dawan0111/dawan0111.github.io.git'
}, function (err) {

});