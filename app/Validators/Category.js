'use strict'

class Category {
  get rules () {
    return {
      name: 'required|max:400',

    }
  }
}

module.exports = Category
