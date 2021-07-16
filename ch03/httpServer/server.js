'use strict'

let http = require('http')

let app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('This Hello World\n')
}).listen(8080, '0.0.0.0')