let twitterAccess  = require('../config/config.js');
class Twitter {
    constructor(hashSearch){
        this.hash = hashSearch;
    }
    
    getTwitterObject(){
        let query =  this.hash;
        let arr = [];
        let i = 0;
        let result =
        twitterAccess.get('search/tweets', { q: `${query}`, count: 20}, function(err, data, response) {
            while(i <= data.statuses.length){
                arr.push(data.statuses[i])
                i++;
            }
            return data;
        });
        return arr;
    }

}

const twitterReturn = new Twitter('Marvel');

module.exports = twitterReturn.getTwitterObject();