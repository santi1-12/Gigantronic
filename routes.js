const express = require('express');
const router = express.Router();

exports.mostrarInicio = (req, res) => {
  res.render('index');
};

