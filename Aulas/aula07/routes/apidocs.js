const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('./swagger.yaml' , 'utf-8');
const swaggerDoc = YAML.parse(file);
const router = express.Router();

router.use('/', swaggerUI.serve);
router.get('/' , swaggerUI.setup(swaggerDoc));

module.exports = router;