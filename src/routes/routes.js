let Faker = require('faker');
let twitterAccess  = require('../config/config.js');
let hashSearch = require('../endpoints/search.js');
let tStream = require('../endpoints/stream.js');
let appRouter = (app) =>{
    app.get('/api', (request, response) => {
        let obj = {
            name       : Faker.internet.ipv6(),
            lastName   : Faker.name.lastName()
        }
        response.status(200).send(obj);
    });

    app.get('/twitter', (request, response) => {
       response.status(200).send(hashSearch);
    });

    app.get('/twitter/stream', (request, response) =>{
        response.status(200).send(tStream);
    });
} 

module.exports = appRouter;