'use strict'

class User {
  get rules () {
    return {
      login: 'required|max:80|min:2',
      password: 'required|max:255|min:2',
      nickname: 'required|max:80|min:2',
      email: 'required|max:255|min:2',
      url: 'max:255',
      activation_key: 'max:250',
      display_name: 'max:250',
    }
  }
}

module.exports = User
