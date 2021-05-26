'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.string('content', 400).notNullable()
      table.string('title', 80).notNullable()
      table.string('status', 80).notNullable()
      table.string('comment_status', 80).notNullable()
      table.string('ping_status', 80).notNullable()
      table.string('name', 80).notNullable()
      table.integer('parent').notNullable()
      table.string('guid', 400).notNullable()
      table.string('type', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
