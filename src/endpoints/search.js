let twitterAccess  = require('../config/config.js');
let query          = '#SKG'
let hashSearch = twitterAccess.get('search/tweets', { q: `${query}`, count: 100 }, function(err, data, response) {
   return data
}); 

module.exports = hashSearch;