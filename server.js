'use strict';

const pg = require('pg');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
// const client = new pg.Client(DATABASE_URL);

app.set('view engine', 'ejs');
// client.connect();
// app.use(express.static(__dirname + '/public'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

// routes

app.get('/hello', (req, res) => {
  res.render('pages/index');
});

app.listen(PORT, () => {
  console.log(`server up! :::${PORT}:::`)
});
