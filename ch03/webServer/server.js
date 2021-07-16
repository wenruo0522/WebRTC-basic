'use strict'

let http = require('http')
let https = require('https')
let fs = require('fs')

let express = require('express')
let serveIndex = require('serve-index')

let app = express()
app.use(serveIndex('./public'))
app.use(express.static('./public'))

let options = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt')
}

//  http server
let http_server = http.createServer(app)
http_server.listen(80, '0.0.0.0')

//  https server
let https_server = https.createServer(options, app)
https_server.listen(443, '0.0.0.0')