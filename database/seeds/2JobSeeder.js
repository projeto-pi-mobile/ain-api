'use strict'

/*
|--------------------------------------------------------------------------
| JobSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Job = use('App/Models/Job')

class JobSeeder {
  async run () {
    await Job.createMany([
      {
        name:'Desenvolvedor front-end', 
        description:'Sou desenvolvedor front-end com mais de 10 anos de profissão.', 
        hits: 0, 
        user_id: 1, 
        category_id: 1, 
      },
      {
        name:'Desenvolvedor back-end', 
        description:'Sou desenvolvedor backend com mais de 10 anos de profissão.', 
        hits: 0, 
        user_id: 2, 
        category_id: 2, 
      },
      {
        name:'DevOps', 
        description:'Sou devOps com mais de 10 anos de profissão.', 
        hits: 0, 
        user_id: 3, 
        category_id: 3, 
      },
      {
        name:'Engenheiro', 
        description:'Sou engenheiro com mais de 10 anos de profissão.', 
        hits: 0, 
        user_id: 4, 
        category_id: 4, 
      },
    ])
  }
}

module.exports = JobSeeder
