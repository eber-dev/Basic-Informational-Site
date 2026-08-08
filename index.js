import { error } from 'node:console';
import { createServer } from 'node:http';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.readFile('./index.html', 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                    return;
                }
                res.end(data);
            });

            break;
        case '/about':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.readFile('./about.html', 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                }
                res.end(data);
            });

            break;
        case '/contact-me':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.readFile('./contact-me.html', 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                }
                res.end(data);
            });

            break;
        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.readFile('./404.html', 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                }
                res.end(data);
            });

            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
