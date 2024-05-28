const express = require('express');
const actors = require('./routes/actors');

const app = express();

app.use(express.json());

app.use('/actors',actors)

const PORT = 3302;

app.listen(PORT, () => {
    console.log(`Executando a aplicação na porta ${PORT}`);
});