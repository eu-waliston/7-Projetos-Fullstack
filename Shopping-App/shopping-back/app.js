const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

require('dotenv').config();

const app = express();

// Conecta ao MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());

// Rotas
app.use('/api/products', productRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
