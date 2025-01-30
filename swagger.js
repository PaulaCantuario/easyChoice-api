const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'EasyChoice API',
    description: 'Em construção...',
  },
  host: 'localhost:3000', // URL base da API
  schemes: ['http'], // Pode ser 'https' se necessário
  basePath: '/', // Caminho base (se aplicável)
};

const outputFile = './swagger-output.json'; // Arquivo onde a documentação será gerada
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  console.log('Swagger.json gerado com sucesso!');
});
