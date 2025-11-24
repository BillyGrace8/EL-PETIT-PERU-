const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serveix tota la carpeta 'src' com a arrel web
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor funcionant al port ${PORT}`);
});
