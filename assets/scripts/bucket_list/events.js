const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const bucketListUi = require('./list_ui')

const newListItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewItem(data)
    .then(ui.createBucketListSuccess)
    .catch(ui.createBucketListFailure)
}
// const onSubmitUpdateListItem = function (event) {
//   event.preventDefault()
//   console.log('update list')
//   const data = getFormFields(this)
//   api.updateListItem(event.target.id, data)
//     .then(listUi.updateListSuccess)
//     .catch(listUi.updateListFailure)
// }

// const onDeleteListItem = function (event) {
//   event.preventDefault()
//   api.deleteListItem(event.target.id)
//     .then(listUi.deleteItemSuccess)
//     .catch(listUi.deleteItemFailure)
// }
const listHandlers = function () {
  $('.list').on('submit', newListItem)
  // click handler to wait for edit button to exist then click handler is added to it
  $(document).on('click', '.edit-button', bucketListUi.onLaunchEditModal)
  // click handle to wait until the save changes  button on the edit modal exists
  $(document).on('submit', '#edit-modal', bucketListUi.onSubmitUpdateListItem)
  // click handler to wait for delete button to exist, then click handler is added to it
  $(document).on('click', '.delete-item', bucketListUi.onDeleteClickButton)
  // $('#edit-modal-save').on('submit', onSubmitUpdateListItem)
  // $('.delete-item').on('submit', onDeleteListItem)
}

module.exports = {
  newListItem,
  listHandlers
  // onSubmitUpdateListItem,
  // onDeleteListItem
}
