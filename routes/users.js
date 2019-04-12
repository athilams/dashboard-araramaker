const express = require('express')
const router = express.Router()
const criaUsuario = require('../queries/insertTable.js')

//rota para pagina de login
router.get('/login', (req,res) => res.send('login'))

//rota para pagina de registro
router.get('/register', (req,res) => res.render('register'))

//pega informacoes do formulario
router.post('/register', (req, res) => {
	res.send('teste')
	console.log(req.body)
})

module.exports = router