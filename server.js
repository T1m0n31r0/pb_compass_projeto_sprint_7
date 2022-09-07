const http = require('http');
const port = 3000; // default

const rotas = {

    '/': 'Cadastro de usuário',
    '/usuarios': 'Listagem de usuários'

}

const server  = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});