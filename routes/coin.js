import express from 'express';
import fetch from 'node-fetch';

const API_Moneda = 'https://api.coincap.io/v2/assets/';

const router = express.Router();

router.get('/:coinName', async (req, res) => {
    const { coinName } = req.params;
  
    try {
      const response = await fetch(`${API_Moneda}${coinName}`);
      const data = await response.json();
      const precio = data.data.priceUsd;
  
      res.send(`El precio en dólares de la moneda ${coinName} para el día de hoy es ${precio}`);
    } catch (error) {
      res.status(502).send('El nombre de la moneda no fue encontrado en la base de datos');
    }
  });
  
  export default router;