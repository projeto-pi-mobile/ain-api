'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.createMany([
      {id:'1', login:'adm', password:'123', nickname:'adm', email:'dev-email@flywheel.local', url:'http://ainapi.local', status:'0', display_name:'adm'},
    ])
  }
}

module.exports = UserSeeder
