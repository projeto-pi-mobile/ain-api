'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {
    static getCampos(){
        return [
            'name',
            'description',
            'hits',
            'user_id', 
            'category_id'
        ]
      }
    users () {
        return this.belongsTo('App/Models/User')
    }
    categories () {
        return this.belongsTo('App/Models/Category')
    }
}

module.exports = Job