import express from 'express';
import fetch from 'node-fetch';

const API_Moneda = 'https://api.coincap.io/v2/assets/';

const router = express.Router();