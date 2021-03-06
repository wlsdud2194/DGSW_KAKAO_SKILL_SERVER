require('dotenv').config();

const HTTP = require('http');
const express = require('express');
const cors = require('cors');
const override = require('method-override');
const serve = require('express-static');
const morgan = require('morgan');
const api = require('./api');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const app = express();
const server = HTTP.createServer(app);

app.use(express.json());
app.use(morgan(`${env === 'production' ? 'combined' : 'dev'}`));
app.use(cors());
app.use(override());
app.use('/static', serve('./public'));

app.use('/api', api);

server.listen(port, () => {
  console.log('Version : 1.6.0');
  console.log(`Kakao chatbot server is started on port ${port}`);
});
