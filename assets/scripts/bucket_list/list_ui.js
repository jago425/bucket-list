'use strict'
// const store = require('../store')
const api = require('./api')
const handlebars = require('../templates/helpers/bucket_list.handlebars')

// function to display edit modal and display show
const onEditModal = function (event) {
  // $('#editItemModal').modal('show')
  api.showListItem(event.target.id)
    .then(listShowSuccess)
    .catch(listShowFailure)
}
const listShowSuccess = function (data) {
  $('#editItemModal').modal('show')
  $('#modal-edit-done').prop('checked', data.list_item.done)
  $('#modal-item-description').val(data.list_item.item_description)
}
const listShowFailure = function (data) {
  $('#status-message').text('failed to load your selection')
}
const updateListSuccess = function (data) {
  $('#bucket-list-handlebars').empty()
  const showListItemsHTML = handlebars({list_items: data.list_items})
  $('#bucket-list-handlebars').html(showListItemsHTML)
  $('.edit-row').on('submit')
  $('.edit-row').on('click', onEditModal)
}

const updateListFailure = function () {
}
const deleteItemSuccess = function (data) {
  $('#bucket-list-handlebars').empty()
  const showListItemsHTML = handlebars({list_items: data.list_items})
  $('#bucket-list-handlebars').html(showListItemsHTML)
  $('.edit-row').on('submit')
  $('.edit-row').on('click', onEditModal)
  $('#status-message').text('Bucket item deleted successfully!')
}
const deleteItemFailure = function () {
  $('#status-message').text('Oops, can you try deleting that from your bucket again?')
}
module.exports = {
  onEditModal,
  listShowSuccess,
  listShowFailure,
  updateListSuccess,
  updateListFailure,
  deleteItemSuccess,
  deleteItemFailure
}
