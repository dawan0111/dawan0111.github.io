var ghpages = require('gh-pages');

ghpages.publish('public', {
  branch: 'gh-pages',
  repo: 'https://github.com/dawan0111/blog.git'
}, function (err) {

});