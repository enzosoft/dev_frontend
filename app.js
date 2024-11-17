const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4040;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// rota para api externa
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json'); 
    const dados = response.data;
    res.render('index', { dados });
  } catch (error) {
    console.error(error);
    res.render('index', { dados: [] });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
