// Captura o clique no botão
document.getElementById("scrapeBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value.trim();

  // Validação: campo não pode estar vazio
  if (!keyword) return alert("Digite um termo de busca");

  try {
    // Faz a chamada à API do backend
    const res = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await res.json();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    // Caso o backend retorne erro
    if (data.erro) {
      resultsDiv.innerHTML = `<p style="color:red;">${data.erro}</p>`;
      return;
    }

    // Percorre cada produto retornado e cria o HTML
    data.resultados.forEach((item) => {
      const el = document.createElement("div");
      el.className = "produto";
      el.innerHTML = `
        <img src="${item.imagem}" alt="${item.titulo}">
        <div>
          <h3>${item.titulo}</h3>
          <p>⭐ ${item.avaliacao || "N/A"} | ${item.numAvaliacoes || "Sem avaliações"}</p>
        </div>
      `;
      resultsDiv.appendChild(el);
    });
  } catch (error) {
    // Tratamento de erro no frontend
    alert("Erro ao buscar dados do servidor");
  }
});
