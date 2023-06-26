
const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Endpoint para obtener las regiones de Chile
router.get('/regions', (req, res) => {
  db.getRegions((error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error retrieving regions' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint para obtener las comunas por región
router.get('/communes/:regionId', (req, res) => {
  const { regionId } = req.params;
  db.getCommunesByRegion(regionId, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error a recuperar communes' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
