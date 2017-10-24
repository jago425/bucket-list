'use strict'
// this is telling the front-end where to find the API...not where the front end should be running
const config = {
  apiOrigins: {
    production: 'https://fathomless-lake-16939.herokuapp.com',
    development: 'http://localhost:4741'
  }
}

module.exports = config
