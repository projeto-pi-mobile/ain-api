'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')


class Category extends AbstractModel {
    static getFields(){
        return [
            'name'
        ];
    }
    jobs () {
        return this.hasMany('App/Models/Job')
    }
}

module.exports = Category
