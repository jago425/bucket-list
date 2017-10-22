const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const newListItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewItem(data)
    .then(ui.createBucketListSuccess)
    .catch(ui.createBucketListFailure)
}

// const openEditModal = function () {
// $('.edit-row').on('function') {
// }
//
// }

const listHandlers = function () {
  $('.list').on('submit', newListItem)
}

module.exports = {
  newListItem,
  listHandlers
  // updateItem
}
