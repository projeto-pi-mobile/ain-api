'use strict'

const User = use('App/Models/User')

class UserController {
    
    async index ({ request, response, view }) {
        const {page, qtd, name, email} = request.all()

        const query = User.query()

        if(name){
        query.where('name', 'like', '%'+name+'%')
        }
        if(email){
        query.where('email', 'like', '%'+email+'%')
        }

        return await query.paginate(page, qtd);
    }
     
    async store({request}){
        const campos = User.getCampos()
        const dados = request.only(campos)

        return await User.create(dados)
    }

    async token({request, auth}){

        const{ email, password }= request.all()

        return await auth.attempt(email, password)
    }

    async show ({ params, request, response, view }) {
        return await User.query()
                        .where('id', params.id)
                        .with('posts')
                        .first()
    }

    async edit ({ params, request, response, view }) {
    }

    async update ({ params, request, response }) {
        const campos = User.getCampos()
        const dados = request.only(campos)
        
        const user = await User.findOrFail(params.id)
        
        user.merge(dados)
        await user.save();

        return user
    }

    async destroy ({ params, request, response }) {
        const user = await User.findOrFail(params.id)

        user.delete()

        return 'Apagado com sucesso!'
    }
}

module.exports = UserController