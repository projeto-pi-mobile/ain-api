'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('description', 400).notNullable()
      table.integer('hits')
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobSchema
