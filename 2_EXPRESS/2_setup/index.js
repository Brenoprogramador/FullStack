const espress = require('express')

const app = espress()
app.get('/', (requisicao, resposta) => {
    resposta.send('Hereges')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})