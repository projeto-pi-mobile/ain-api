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
      {
        name: 'Thiago',
        surname: 'Nascimento',
        email: 'thiagotnon@gmail.com',
        phone: '61983134112',
        password: '123',
      },
    ])

  }
}

module.exports = UserSeeder
