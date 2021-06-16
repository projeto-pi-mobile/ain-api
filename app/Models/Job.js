'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

class Job extends AbstractModel {
    static getFields(){
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
        return this.belongsToMany('App/Models/Category')
    }
}

module.exports = Job