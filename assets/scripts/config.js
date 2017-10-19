'use strict'
// this is telling the front-end where to find the API...not where the front end should be running
const config = {
  apiOrigins: {
    production: 'https://ga-wdi-boston.herokuapp.com',
    development: 'http://localhost:4741'
  }
}

module.exports = config
