const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4040;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

rota para api externa 
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

// app.get('/', async (req, res) => {
//   const limit = parseInt(req.query.limit) || 10; // limite 10 (padrão)
//   try {
//     const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json'); 
//     const dados = response.data.slice(0, limit); 
//     res.render('index', { dados, limit });
//   } catch (error) {
//     console.error(error);
//     res.render('index', { dados: [], limit });
//   }
// });


// //UITLIZAR ESSE CODIGO NA "INDEX.EJS" NO COLAR EU QUE EU MARQUEI CASO QUEIRA VER FUNCIONANDO A PARTE DE "CARREGAR MAIS":
//     <div class="container text-center">
//       <form action="/" method="get">
//         <input type="hidden" name="limit" value="<%= limit + 10 %>">
//         <button type="submit" class="btn btn-primary">Carregar mais</button>
//       </form>
//     </div>
            

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
