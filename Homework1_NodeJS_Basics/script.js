// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');

let loadCounter = 0;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<a href="/about">Ссылка на /about</a>');
    } else if (req.url === "/about") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<a href="/">Ссылка на /main</a>');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена!</h1>');
    }
    loadCounter++;
    console.log(loadCounter);
})

server.listen(3000, () => console.log("сервер запущен"));