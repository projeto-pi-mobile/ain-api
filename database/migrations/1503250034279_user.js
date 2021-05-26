'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('login', 80).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('nickname', 80).notNullable()
      table.string('email', 255).notNullable()
      table.string('url', 255).notNullable()
      table.string('activation_key', 255).notNullable()
      table.integer('status').notNullable()
      table.string('display_name', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
