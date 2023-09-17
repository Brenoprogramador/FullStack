const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'templates')

//utilizar arquivos estaticos como css
app.use(express.static('public'))


// receber informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))

// converter em objeto
app.use(express.json())

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`)
})

app.get('/index/complementar', (req, res) => {
    res.sendFile(`${basePath}/complementar.html`)
})

app.post('/complementar/enviar', (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    console.log(`
    Usuario: ${nome}
    Email: ${email}
    Senha: ${senha}`)

    res.redirect('/')
})





app.listen(3000)