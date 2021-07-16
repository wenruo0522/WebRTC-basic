'use strict'

let https = require('https')
let fs = require('fs')

let options = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt')
}

let app = https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World\n')
    console.log('listen 443...')
}).listen(443, '0.0.0.0')
