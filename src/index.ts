import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const expressListEndpoints = require('express-list-endpoints');

import { createRouter } from './router';
import { createMurmursRouter } from './routes/murmurs';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '20mb'}));

const port = 3000;

app.use('/', createRouter());
// app.use('/users/', create...());
app.use('/users/:userId/murmurs', createMurmursRouter());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
  console.log(expressListEndpoints(app));
});
