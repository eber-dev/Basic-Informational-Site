import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        res.send(data);
    });
});

app.get('/about', (req, res) => {
    fs.readFile('./about.html', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        }
        res.send(data);
    });
});

app.get('/contact-me', (req, res) => {
    fs.readFile('./contact-me.html', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        }
        res.send(data);
    });
});

app.use((req, res) => {
    fs.readFile('./404.html', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }

        res.status(404).send(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
