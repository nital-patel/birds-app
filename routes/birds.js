const express = require('express')
const birdsRouter = express.Router();
const birdsData = require('../db/birds.js')



birdsRouter.get('/', function(req, res) {
  res.render('welcome')
})

birdsRouter.get('/birds', function(req, res) {
  res.json(birdsData);
})

birdsRouter.get('/new', function (req, res) {
  res.render('new')
})

birdsRouter.post('/birds', function (req, res) {
  birdsData.push(req.body)
  res.redirect('/birds')
})

birdsRouter.get('/:id', function (req, res) {
  res.json(birdsData[req.params.id -1])
})

module.exports = birdsRouter;
