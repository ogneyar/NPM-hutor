'use strict'

const express = require('express');
const port = process.env.PORT || 8888;

module.exports = hutor
function hutor() {
    express().use(express.static('/'))
        .get('*', (req, res) => res.sendFile(__dirname + '/index.html'))
        .listen(port, () => console.log(`Starting server. Listening on ${ port }`));
}