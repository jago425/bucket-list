'use strict'
const store = require('../store')
const api = require('../bucket_list/api')
const handlebars = require('../templates/helpers/bucket_list.handlebars')

const signUpSuccess = function (data) {
  $('#status-message').text('You have successfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#status-message').text('Sign-Up Failed!')
}

const signInSuccess = function (response, event) {
  // $('#status-message').text('Signed in successfully')
  $('#list-form').show()
  store.user = response.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.nppi').val('')
  $('#status-message').text('')
  $('#list-form').show()
  api.getList()
    .then(onGetListSuccess)
    .catch(onGetListFailure)
}
// function to display my index request
const onGetListSuccess = function (data) {
  $('#bucket-list-handlebars').empty()
  const showListItemsHTML = handlebars({list_items: data.list_items})
  $('#bucket-list-handlebars').html(showListItemsHTML)
}

const onGetListFailure = function () {
  $('#status-message').text('failed to load your list')
}

const signInFailure = function () {
  $('#status-message').text('Login Failed')
  $('.nppi').val('')
}

const changePasswordSuccess = function () {
  $('#status-message').text('Changed password successfully')
  $('.nppi').val('')
}

const changePasswordFailure = function () {
  $('#status-message').text('Password Change Failed. Please try again.')
}

const signOutSuccess = function () {
  // $('#status-message').text('Signed out successfully')
  store.user = null
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#list-form').hide()
  $('#bucket-list-handlebars').empty()
}

const signOutFailure = function () {
  $('#status-message').text('Logout Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onGetListSuccess,
  onGetListFailure
}
