const url = require('./connection/connection');
const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/people', async (request, response) => {
        const resp = await fetch(url.BASE_URL);
        const json = await resp.json();
        response.send(json);
})

app.get('/api/people/:page', async (request, response) => {
        const resp = await fetch(`${url.BASE_URL}?page=${request.params.page}`);
        const json = await resp.json();
        response.send(json);
})

app.get('/api/people/:searcrQuery', async (request, response) => {
    const resp = await fetch(`${url.BASE_URL}?search=${request.params.searcrQuery}`);
    const json = await resp.json();
    response.send(json);
})

const port = process.env.PORT || 3000;
app.listen(port);




