const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Новый запрос:", req.method, req.url);

    // Главная страница
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("Сервер работает!");
    }

    // Любой другой маршрут → 404
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("Страница не найдена");
    }
});

// Запуск сервера
server.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
