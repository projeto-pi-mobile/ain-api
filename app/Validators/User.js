'use strict'

class User {
  get rules () {
    return {
      name:'required|max:255|min:2',
      surname:'required|max:255|min:2',
      email: 'required|max:255|min:2',
      phone: 'required|max:255|min:2',
      password: 'required|max:12|min:6'
    }
  }
}

module.exports = User
