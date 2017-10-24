'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const handlebars = require('../templates/helpers/bucket_list.handlebars')
const authEvents = require('../authentication/ui')

// function launch edit modal from edit button - kicks off listShowSuccess - triggered by onGetListSuccess (in auth/ui)
const onLaunchEditModal = function (event) {
  event.preventDefault()
  // console.log('onLaunchEditModal', event.target)
  api.showListItem(event.target.dataset.id) // dataset = data-id in handlebars
    .then(listShowSuccess)
    .catch(listShowFailure)
}
// function to display a list item in the modal and then to turn off listener from last time the event was triggered so new submit can be applied.
const listShowSuccess = function (data) {
  // console.log('listShowSuccess', data)
  $('#modal-item-description').val(data.list_item.item_description)
  $('#item-id-from-edit-modal').attr('value', data.list_item.id)
  $('#edit-modal').off('submit')
  // console.log('in the listShowSuccess')
}
const listShowFailure = function (data) {
  $('#status-message').text('failed to load your selection')
}

// function to display all the list items (i.e refresh list)
const onSubmitUpdateListItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.list_item.id
  // console.log('onSubmitUpdateListItem', id, data)
  api.updateListItem(id, data)
    .then(updateListSuccess)
    .catch(updateListFailure)
}
// function to close modal and refresh the list items when UPDATE is successful
const updateListSuccess = function (data) {
  // console.log('are we making progress?')
  // debugger
  $('#editItemModal').modal('toggle')
  api.getList()
    .then(authEvents.onGetListSuccess)
    .catch(authEvents.onGetListFailure)
}

const updateListFailure = function () {
}
// function to attach a click handler to the delete button
const onDeleteClickButton = function (event) {
  event.preventDefault()
  // console.log(event.target.dataset.id)
  onDeleteListItem(event.target.dataset.id)
}

const onDeleteListItem = function (id) {
  event.preventDefault()
  // console.log(id)
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
  $('.edit-row').on('click', onLaunchEditModal)
  $('.delete-item').on('click', onDeleteClickButton)
}

const onGetListAfterDeleteFailure = function () {
  $('#status-message').text('failed to load your list')
}

const deleteItemFailure = function () {
  $('#status-message').text('Oops, can you try deleting that from your bucket again?')
}
module.exports = {
  onLaunchEditModal,
  listShowSuccess,
  listShowFailure,
  updateListSuccess,
  updateListFailure,
  onSubmitUpdateListItem,
  onDeleteListItem,
  deleteItemSuccess,
  deleteItemFailure,
  onDeleteClickButton
}
