// Importando bibliotecas necessárias
const express = require("express");
const axios = require("axios");
const { JSDOM } = require("jsdom");
const cors = require("cors");

// Criando a aplicação Express
const app = express();
app.use(cors()); // Permite requisições de outros domínios (necessário para o frontend acessar a API)

// Função que realiza o scraping na Amazon
async function scrapeAmazon(keyword) {
  try {
    // Monta a URL de busca da Amazon com a palavra-chave informada
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

    // Faz a requisição HTTP para a Amazon
    const { data } = await axios.get(url, {
      headers: {
        // Cabeçalho para simular um navegador e evitar bloqueio simples
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/115 Safari/537.36",
      },
    });

    // Carrega o HTML retornado no JSDOM
    const dom = new JSDOM(data);
    const document = dom.window.document;

    // Array para armazenar os produtos extraídos
    const results = [];

    // Seleciona todos os elementos de produto
    const products = document.querySelectorAll('[data-component-type="s-search-result"]');

    // Itera sobre cada produto encontrado
    products.forEach((product) => {
      const titleEl = product.querySelector("h2 a span");
      const ratingEl = product.querySelector(".a-icon-star-small span");
      const reviewsEl = product.querySelector(".a-size-base.s-underline-text");
      const imageEl = product.querySelector("img.s-image");

      results.push({
        titulo: titleEl ? titleEl.textContent.trim() : null, // Nome do produto
        avaliacao: ratingEl ? ratingEl.textContent.split(" ")[0] : null, // Estrelas
        numAvaliacoes: reviewsEl ? reviewsEl.textContent.trim() : null, // Número de reviews
        imagem: imageEl ? imageEl.src : null, // URL da imagem
      });
    });

    return results;
  } catch (error) {
    console.error(error.message);
    throw new Error("Erro ao fazer scraping da Amazon");
  }
}

// Endpoint da API que recebe ?keyword=...
app.get("/api/scrape", async (req, res) => {
  const { keyword } = req.query;

  // Validação do parâmetro
  if (!keyword) {
    return res.status(400).json({ erro: "O parâmetro 'keyword' é obrigatório" });
  }

  try {
    // Chama a função de scraping
    const data = await scrapeAmazon(keyword);
    res.json({ palavraChave: keyword, resultados: data });
  } catch (error) {
    // Retorna erro genérico em caso de falha
    res.status(500).json({ erro: error.message });
  }
});

// Inicializa o servidor
app.listen(3000, () => console.log("✅ Servidor rodando em http://localhost:3000"));
