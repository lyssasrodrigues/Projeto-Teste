
```markdown
# 📦 Amazon Product Scraper

Aplicação simples que coleta os produtos da **primeira página** de resultados da Amazon para uma palavra-chave informada pelo usuário.

## 🚀 Tecnologias Utilizadas
- **Backend:** Node.js, Express, Axios, JSDOM, CORS
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla) com Vite

---

## 📂 Estrutura do Projeto


amazon-scraper-backend/
├── index.js          # Código do servidor backend (API)
├── package.json
└── ...

amazon-scraper-frontend/
├── index.html        # Estrutura HTML
├── style.css         # Estilização da página
├── main.js           # Lógica frontend
├── package.json
└── ...


---

## ⚙️ Configuração e Execução

### **1️⃣ Clonar o projeto**
```bash
git clone https://github.com/seu-usuario/amazon-scraper.git
cd amazon-scraper
````

---

### **2️⃣ Backend**

1. Abra o terminal e vá para a pasta **backend**:

```bash
cd amazon-scraper-backend
```

2. Instale as dependências:

```bash
npm install express axios jsdom cors
```

3. Execute o servidor:

```bash
node index.js
```

> O backend estará rodando em: **[http://localhost:3000](http://localhost:3000)**

---

### **3️⃣ Frontend**

1. Em outro terminal, vá para a pasta **frontend**:

```bash
cd amazon-scraper-frontend
```

2. Crie o projeto com Vite (se ainda não tiver criado):

```bash
npm create vite@latest . --template vanilla
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

> O frontend estará rodando em: **[http://localhost:5173](http://localhost:5173)**

---

## 💻 Uso

1. Abra o frontend no navegador.
2. Digite uma palavra-chave (exemplo: `laptop`, `iphone`).
3. Clique em **Buscar**.
4. Os produtos encontrados serão exibidos como cards contendo:

   * 🏷 **Título**
   * ⭐ **Avaliação**
   * 💬 **Número de avaliações**
   * 🖼 **Imagem do produto**

---

## ⚠️ Observações Importantes

* A Amazon implementa bloqueios contra scraping (CAPTCHAs e bloqueios de IP).
* Para uso frequente ou produção, recomenda-se utilizar **proxies rotativos** ou serviços especializados.
* O projeto é **apenas para fins educacionais**.

---

## 📄 Licença

Este projeto é de uso livre para fins **educacionais e de aprendizado**.

```
