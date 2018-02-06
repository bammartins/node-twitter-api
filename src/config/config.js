let Twit  = require('twit');

const twitterAccess = new Twit({
  consumer_key:         'JgjurF2EKvnv7VstaLGK6rJ9x',
  consumer_secret:      'cQ2RPXTRMvb32XVYJcqrUQvWuiJfJ3K0L1UgOJsXiSD7eaPzGF',
  access_token:         '3365617708-xpI82h4LuFSnfYrHiABxI1yYOMTWU0ewgKz4F4D',
  access_token_secret:  'nsd8GLSUSSSilnxXGwUsdDV6Z9bGON6qW95LOk00MXWwg',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
});

module.exports = twitterAccess;