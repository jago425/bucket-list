'use strict'
const config = require('../config')
const store = require('../store')

const createNewItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/list_items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getList = function () {
  return $.ajax({
    url: config.apiOrigin + '/list_items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createNewItem,
  getList
}
