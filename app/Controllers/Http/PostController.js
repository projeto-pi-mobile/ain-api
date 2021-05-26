'use strict'
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Post = use('App/Models/Post');

/**
 * Resourceful controller for interacting with categories
 */
class PostController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, amount, name } = request.all();
    const query = Post.query();

    if( name ) {
      query.where('name', 'like', `%${name}%`);
    }
    return await query.paginate(page, amount);
  }
  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }){
    const registerFields = Post.getCampos();
    const data = request.only(registerFields);
    return await Post.create(data);
  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Post.query()
                        .where('id', params.id)
                        .with('users')
                        .first()
  }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = Post.getCampos()
    const dados = request.only(campos)
    
    const post = await Post.findOrFail(params.id)
    
    post.merge(dados)
    await post.save();

    return post
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   async destroy ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)

    post.delete()

    return 'Apagado com sucesso!'
}
}

module.exports = PostController

