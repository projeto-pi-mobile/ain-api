'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static getCampos(){
        return [
            'user_id', 
            'content',
            'title',
            'status',
            'comment_status',
            'ping_status',
            'name',
            'parent',
            'guid',
            'type'
        ]
      }
    users () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Post