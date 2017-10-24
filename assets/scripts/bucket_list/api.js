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

const showListItem = function (listId) {
  return $.ajax({
    url: config.apiOrigin + '/list_items/' + listId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateListItem = function (listId, data) {
  console.log('ajax', listId, data)
  return $.ajax({
    url: config.apiOrigin + '/list_items/' + listId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteListItem = function (listId) {
  console.log(listId)
  return $.ajax({
    url: config.apiOrigin + '/list_items/' + listId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createNewItem,
  getList,
  showListItem,
  updateListItem,
  deleteListItem
}
