const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


app.use(express.json()); // Middleware para JSON
app.use("/api/users", userRoutes); // Rotas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
