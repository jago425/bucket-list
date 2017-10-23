'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const handlebars = require('../templates/helpers/bucket_list.handlebars')
let id = ''

// function display of a list_item in the edit modal - kicks off listShowSuccess and triggered from updateListSuccess
const onEditModal = function (event) {
  event.preventDefault()
  api.showListItem(event.target.id)
    .then(listShowSuccess)
    .catch(listShowFailure)
}
// function to display a list item in the modal
const listShowSuccess = function (data) {
  $('#editItemModal').modal('show')
  $('#modal-edit-done').prop('checked', data.list_item.done)
  $('#modal-item-description').val(data.list_item.item_description)
  $('#edit-modal').on('submit', onUpdateList)
  id = data.list_item.id
  api.getList()
    .then(indexListSuccess)
    .catch(indexListFailure)
}
const listShowFailure = function (data) {
  $('#status-message').text('failed to load your selection')
}

// function to display all the list items (i.e refresh list)
const indexListSuccess = function (data) {
  $('#bucket-list-handlebars').empty()
  const showListItemsHTML = handlebars({list_items: data.list_items})
  $('#bucket-list-handlebars').html(showListItemsHTML)
}

const indexListFailure = function () {
  $('#status-message').text('failed to load your list')
}

const onUpdateList = function (event) {
  // console.log('is anything happening')
  event.preventDefault()
  // console.log('update list')
  const data = getFormFields(this)
  api.updateListItem(id, data)
    .then(updateListSuccess)
    .catch(updateListFailure)
}
// function to close modal and refresh the list items when UPDATE is successful
const updateListSuccess = function (data) {
  console.log('are we making progress?')
  // debugger
  $('#editItemModal').modal('hide')
  api.getList()
    .then(indexListSuccess)
    .catch(indexListFailure)
  // $('#bucket-list-handlebars').empty()
  // const showListItemsHTML = handlebars({list_items: data.list_items})
  // $('#bucket-list-handlebars').html(showListItemsHTML)
  // $('.edit-row').on('submit')
  // $('.edit-row').on('click', onEditModal)
  // $('.delete-item').on('click', onDeleteListItem)
}

const updateListFailure = function () {
}
const onDeleteClickButton = function (event) {
  event.preventDefault()
  console.log(event.target.id)
  onDeleteListItem(event.target.id)
}

const onDeleteListItem = function (id) {
  event.preventDefault()
  console.log(id)
  api.deleteListItem(id)
    .then(deleteItemSuccess)
    .catch(deleteItemFailure)
}
const deleteItemSuccess = function (data) {
  api.getList()
    .then(onGetListAfterDeleteSuccess)
    .catch(onGetListAfterDeleteFailure)
  $('#status-message').text('Bucket item deleted successfully!')
}
const onGetListAfterDeleteSuccess = function (data) {
  $('#bucket-list-handlebars').empty()
  const showListItemsHTML = handlebars({list_items: data.list_items})
  $('#bucket-list-handlebars').html(showListItemsHTML)
  // $('.edit-row').on('submit')
  $('.edit-row').on('click', onEditModal)
  $('.delete-item').on('click', onDeleteClickButton)
}

const onGetListAfterDeleteFailure = function () {
  $('#status-message').text('failed to load your list')
}
// $('#bucket-list-handlebars').empty()
// const showListItemsHTML = handlebars({list_items: data.list_items})
// $('#bucket-list-handlebars').html(showListItemsHTML)
// $('.edit-row').on('submit')
// $('.edit-row').on('click', onEditModal)
// $('#status-message').text('Bucket item deleted successfully!')
const deleteItemFailure = function () {
  $('#status-message').text('Oops, can you try deleting that from your bucket again?')
}
module.exports = {
  onEditModal,
  listShowSuccess,
  listShowFailure,
  updateListSuccess,
  updateListFailure,
  onUpdateList,
  onDeleteListItem,
  deleteItemSuccess,
  deleteItemFailure,
  onDeleteClickButton
}
