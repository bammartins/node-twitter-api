let Faker = require('faker');
let twitterAccess  = require('../config/config.js');
let hashSearch = require('../endpoints/search.js')

let appRouter = (app) =>{
    app.get('/api', (request, response) => {
        let obj = {
            name       : Faker.name.firstName(),
            lastName   : Faker.name.lastName()
        }
        response.status(200).send(obj);
    });

    app.get('/', (request, response) => {
       response.render('lista');
    });

    app.get('/twitter', (request, response) => {
       response.status(200).send(hashSearch);
    });


} 

module.exports = appRouter;