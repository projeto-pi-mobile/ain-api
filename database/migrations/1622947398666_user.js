'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('surname', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('phone', 255).notNullable()
      table.string('password', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
