"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = User.query().orderBy("name", "asc");
    if (name) {
      query.where("name", "like", `%${name}%`).fetch();
    }
    return await query.paginate(page, qty);
  }

  async store({ request, response }) {
    console.log("entrei no store");
    try {
      const fields = await User.getFields();
      const data = await request.only(fields);
      const { email } = data;

      const user = await User.query().where("email", email).first();

      if (!user) {
        const storeUser = await User.create(data);
        response.status(200).json({
          message: "Usuário criado com sucesso!",
          data: storeUser,
        });
      } else {
        response.status(401).json({
          message: "Usuário já existe",
          email,
        });
      }
    } catch (err) {
      response.status(500).json({
        message: "Ocorreu um erro desconhecido.",
      });
    }
  }

  async token({ request, auth, response }) {
    const { email, password } = request.all();
    try {
      if (email && password) {
        const token = await auth.attempt(email, password);
        const { id } = await User.query().where("email", email).first();
        response.status(200).json({
          message: "Usuário encontrado",
          data: { ...token, id },
        });
      } else {
        console.log(response);
        response.status(401).json({
          message: "Dados incorretos.",
        });
      }
    } catch(err) {
      response.status(401).json({
        message: "Usuário não encontrado.",
        email
      })
    }
  }

  async show({ params: { id }, response }) {
    const userData = await User.query().where("id", id).with("jobs").first();
    if (userData) {
      response.status(200).json({
        message: "Dados do usuário",
        data: userData,
      });
    } else {
      response.status(401).json({
        message: "Usuário não encontrado",
        id,
      });
    }
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
