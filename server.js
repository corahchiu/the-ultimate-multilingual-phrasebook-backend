const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Point static path to dist
// app.use(express.static(path.join(__dirname, '../multilingual-phrasebook/dist')));

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));