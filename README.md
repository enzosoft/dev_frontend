# Servidor Express com API Externa

Este repositório contém um servidor Node.js utilizando Express para consumir dados de uma API externa e renderizá-los em uma página EJS.

## Funcionalidades

- Consome dados da API pública de produtos de maquiagem ([Makeup API](https://makeup-api.herokuapp.com/)).
- Renderiza os dados utilizando EJS.
- Implementa um sistema de "Carregar Mais" para paginar os resultados.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes itens:

- [Node.js](https://nodejs.org/)
- Gerenciador de pacotes npm ou yarn

## Instalação

1. Clone este repositório:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

## Uso

1. Inicie o servidor:

   ```sh
   node app.js
   ```

2. Acesse no navegador:

   ```sh
   http://localhost:4040
   ```

## Estrutura do Projeto

```
📁 projeto
│-- 📄 app.js
│-- 📂 views
│   ├── index.ejs
│-- 📄 package.json
│-- 📄 README.md
```

## Implementação do "Carregar Mais"

Caso queira utilizar a funcionalidade de "Carregar Mais", inclua este código na `index.ejs` dentro do local apropriado:

```html
<div class="container text-center">
  <form action="/" method="get">
    <input type="hidden" name="limit" value="<%= limit + 10 %>">
    <button type="submit" class="btn btn-primary">Carregar mais</button>
  </form>
</div>
```

## Observações

- O servidor Express renderiza uma página `index.ejs` para exibir os dados.
- O limite padrão de produtos carregados é 10, podendo ser aumentado com o botão "Carregar Mais".

## Licença

Este projeto é de uso livre e pode ser modificado conforme necessário.

---

Feito com ❤️ para facilitar a integração com APIs no Express! 🚀

