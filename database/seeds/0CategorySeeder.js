'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Post = use('App/Models/Post')

class PostSeeder {
  async run () {
    await Post.createMany([
      {name: 'Frondend'},
      {name: 'Backend'},
      {name: 'Devops'},
      {name: 'Arquiteto'},
      {name: 'DBA'},
    ])
  }
}

module.exports = PostSeeder
