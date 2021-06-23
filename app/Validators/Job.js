'use strict'

class Job {
  get rules () {
    return {
      name: 'required|max:400',
      description: 'required|max:400',
      hits: 'integer',
      user_id: 'integer|required',
      category_id: 'integer',

    }
  }
}

module.exports = Job
