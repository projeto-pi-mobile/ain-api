'use strict'

class AbstractValidator {
  get validateAll() {
    return true;
  }

  get messages() {
    return {
      // 'nome.required': 'O campo [nome] é obrigatorio!',
      'required': 'O campo {{ field }} é obrigatorio!',
      'max': 'O valor informado é maior que o máximo permitido',
      'min': 'O valor informado é menor que o mínimo permitido ',
      'integer': 'O campo {{ field }} deve ser inteiro',
      'unique': 'Já existe registro com o mesmo valor',
      'email': 'O E-mail é inválido',
      'date': 'O campo [{{ field }}] deve estar no formato de data',
      'in' : 'O valor informado não está entre as opções válidas'
    }
  }
  
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = AbstractValidator
