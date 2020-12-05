/*!
 * hutor
 * Copyright (c) 2020 Ogneyar
 * MIT Licensed
 */

'use strict';

const express = require('express');
const port = process.env.PORT || 8888;
    
const hutor = (p = port) => {
    express().use(express.static('/'))
    .get('*', (req, res) => res.sendFile(__dirname + '/index.html'))
    .listen(p, () => console.log(`Starting server. Listening on ${ p }`));
}
module.exports = hutor