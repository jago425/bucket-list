const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const listUi = require('./list_ui')

const newListItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewItem(data)
    .then(ui.createBucketListSuccess)
    .catch(ui.createBucketListFailure)
}
const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateListItem(event.target.id, data)
    .then(listUi.updateListSuccess)
    .catch(listUi.updateListFailure)
}

const onDeleteListItem = function (event) {
  event.preventDefault()
  api.deleteListItem(event.target.id)
    .then(listUi.deleteItemSuccess)
    .catch(listUi.deleteItemFailure)
}
const listHandlers = function () {
  $('.list').on('submit', newListItem)
  $('.edit-modal-save').on('submit', onUpdateList)
  $('.delete-item').on('submit', onDeleteListItem)
}

module.exports = {
  newListItem,
  listHandlers,
  onUpdateList,
  onDeleteListItem
}
