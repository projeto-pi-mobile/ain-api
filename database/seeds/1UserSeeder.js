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
        name: "Thiago",
        surname: " Nascimento",
        email: "thiagonatan@enersol.com",
        phone: "+55 (877) 346-2613",
        password: 123
      },
      {
        name: "Rios",
        surname: " Sanchez",
        email: "riossanchez@enersol.com",
        phone: "+55 (877) 546-2613",
        password: 123
      },
      {
        name: "Fuentes",
        surname: " Hurst",
        email: "fuenteshurst@enersol.com",
        phone: "+55 (975) 475-2449",
        password: 123
      },
      {
        name: "Shelly",
        surname: " Drake",
        email: "shellydrake@enersol.com",
        phone: "+55 (835) 499-2763",
        password: 123
      },
      
    ])

  }
}

module.exports = UserSeeder
