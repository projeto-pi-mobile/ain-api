'use strict'
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Job = use('App/Models/Job');

/**
 * Resourceful controller for interacting with categories
 */
class JobController {
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
    const { page, qty, name } = request.all();
    const query = Job.query().orderBy("name", "asc").with('categories');
    if( name ) {
      query.where('name', 'like', `%${name}%`).fetch();
    }
    return await query.paginate(page, qty);
  }
  /**
   * Create/save a new category.
   * JOB categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }){
    const registerFields = Job.getFields();
    const data = request.only(registerFields);
    return await Job.create(data);
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
    
    const data = await Job.query()
      .where('id', params.id)
      .first();
    data.hits = data.hits + 1;
    await data.save();
    return await Job.query().where('id', params.id).with('users').with('categories').first();
   
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
    const fields = Job.getFields()
    const data = request.only(fields)
    
    const job = await Job.findOrFail(params.id)
    
    job.merge(data)
    await job.save();

    return job;
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
    const job = await Job.findOrFail(params.id)

    job.delete()

    return {
      message: 'Serviço removido com sucesso!'
    };
}
}

module.exports = JobController

