const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const accessControlAllow = require('./middlewares/accessControlAllow');

const app = express();

app.use(accessControlAllow);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

module.exports = app;