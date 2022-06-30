/*!
 * hutor
 * Copyright (c) 2020 Ogneyar
 * MIT Licensed
 */

'use strict';

const express = require('express');
const port = process.env.PORT || 8888;
    
module.exports = (index = __dirname + '/index.html', p = port) => {
    express().use(express.static('/'))
    .get('*', (req, res) => res.sendFile(index))
    .listen(p, () => console.log(`Server started on http://localhost:${p}`));
}