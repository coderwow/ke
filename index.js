const ghpages = require('gh-pages');
 
ghpages.publish('_book', function(err) {
    console.log('发布完成 ！')
});