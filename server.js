const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const app = express();

// Load your OpenAPI YAML file
// const openapiDocumentation = yaml.load(path.join(__dirname, 'openapi.yaml'));
const openapiDocumentation = yaml.load(path.join(__dirname, 'newopenapi.yaml'));

// Set up Swagger UI with your documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDocumentation));

app.listen(3000, () => {
    console.log('API Docs available at http://localhost:3000/docs');
});
