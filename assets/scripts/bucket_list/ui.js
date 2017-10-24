'use strict'
const api = require('./api')
const authUi = require('../authentication/ui')

const createBucketListSuccess = function () {
  $('#list-form').get(0).reset()
  api.getList()
    .then(authUi.onGetListSuccess)
    .catch(authUi.onGetListFailure)
  $('#status-message').text('')
}

const createBucketListFailure = function () {
  $('#status-message').text('please try again')
}

module.exports = {
  createBucketListSuccess,
  createBucketListFailure
}
