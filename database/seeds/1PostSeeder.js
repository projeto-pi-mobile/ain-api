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
      {id:'1', user_id:'1', title:'Desenvolvedor fullstack', content:'Sou desenvolvedor fullstack com mais de 10 anos de profissão.', status:'inherit', comment_status:'open', ping_status:'open', name:'desenvolvedor-fullstack__trashed', parent:'233', guid:'https://dbf80a5a2699.ngrok.io/desenvolvedor-fullstack/', type:'233'},
    ])
  }
}

module.exports = PostSeeder
