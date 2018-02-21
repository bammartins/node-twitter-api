let twitterAccess  = require('../config/config.js');

class TwitterStream {
    constructor(){

    }

    initStream(){
        let tStream  = twitterAccess.stream('statuses/filter', {track:'streaming', lang:'pt'});
        let obj = [];
        let i = 0;
        tStream.on('tweet', (tweets) =>{
            for (let key in tweets){
                obj.push(tweets[key]);
            }
            // return obj;
        });
        return obj;
    }
}

const twitterStream = new TwitterStream();

module.exports = twitterStream.initStream();