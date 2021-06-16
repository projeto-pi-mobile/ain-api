"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = User.query().orderBy("name", "asc");
    if( name ) {
      query.where('name', 'like', `%${name}%`).fetch();
    }
    return await query.paginate(page, qty);
  }

  async store({ request }) {
    const fields = User.getFields();
    const data = request.only(fields);

    return await User.create(data);
  }

  async token({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);

    return token;
  }

  async show({ params, request, response, view }) {
    return await User.query().where("id", params.id).with("jobs").first();
  }

  async update({ params, request, response }) {
    const fields = User.getFields();
    const data = request.only(fields);

    const user = await User.findOrFail(params.id);

    user.merge(data);
    await user.save();

    return user;
  }

  async destroy({ params, request, response }) {
    const user = await User.findOrFail(params.id);

    user.delete();

    return {
      message: "Usuário removido com sucesso!",
    };
  }
}

module.exports = UserController;
