'use strict'

class User {
  get rules () {
    return {
      user_id: 'integer|required',
      content: 'required|max:400',
      title: 'required|max:80|min:2',
      status: 'required|max:80',
      comment_status: 'max:80',
      ping_status: 'max:80',
      name: 'max:80|min:2',
      parent: 'integer',
      guid: 'required|max:400',
      type: 'required|max:80',
    }
  }
}

module.exports = User
