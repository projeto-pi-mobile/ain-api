'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Category = use('App/Models/Category');

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { page, amount, name } = request.all();
    const query = Category.query();

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
  async store ({ request, response }) {
    const fields = Category.getFields()
    const data = request.only(fields)

    return await Category.create(data)
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
  async show ({ params, request, response, view }) {
    return await Category.query()
                        .where('id', params.id)
                        .with('jobs')
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
  async update ({ params, request, response }) {
    const fields = Category.getFields()
    const data = request.only(fields)
    
    const category = await Category.findOrFail(params.id)
    
    category.merge(data)
    await category.save();

    return category;
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
    const category = await Category.findOrFail(params.id);
    console.log(category);

    category.delete()

    return {
      message: 'Categoria removida com sucesso!'
    };
  }
}

module.exports = CategoryController
