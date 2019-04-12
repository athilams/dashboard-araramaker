const pg = require('pg')
const pool = require('../config/pg_pool.js')

const createUser = (request, response) => {
  const {id, nome, cpf, nascimento, email, telefone, password, password2  } = request.body

  pool.query('INSERT INTO usuarios (nome, cpf, nascimento, email, telefone, password, password2 ) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id, nome, cpf, nascimento, email, telefone, password, password2], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Usuario criado: ${results.nome}`)
    pool.end()
  })
}

module.exports = createUser