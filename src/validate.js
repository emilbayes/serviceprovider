import {Validator, validate} from 'jsonschema';
var v = new Validator();
import loadSwagger from './swaggerFromSpec';
const swagger = loadSwagger();
v.addSchema(swagger, '/');

import fs from 'fs';
import yaml from 'js-yaml';

let schemas;
let responseSchemas; 
function getSchema(name) {
  if (!schemas) {
    schemas = {};
    const fullSpec = yaml.safeLoad(fs.readFileSync(__dirname + '/../doc/spec.yaml', 'utf-8'));
    const keys = Object.keys(fullSpec.api);

    keys.forEach((key) => {
      const spec = fullSpec.api[key];
      schemas[key] = {
        type: 'object',
        required: spec.required,
        additionalProperties: false,
        properties: Object.assign({}, fullSpec.defaultProperties, spec.properties)
      };
    });
  }

  return schemas[name] || {};
}

function getResponseSchema(name) {
  if (!responseSchemas) {
    responseSchemas = {};
    const fullSpec = yaml.safeLoad(fs.readFileSync(__dirname + '/../doc/spec.yaml', 'utf-8'));
    const keys = Object.keys(fullSpec.api);

    keys.forEach((key) => {
      responseSchemas[key] = {};
      const spec = fullSpec.api[key];
      if (spec.response && spec.response.$ref) {
        responseSchemas[key] = spec.response.$ref;
      }
    }); 
  }
  return responseSchemas[name] || {};

}

export function validateRequest (name, params) {
  const schema = getSchema(name); 
  return validate(params, schema).errors;
}

export function validateResponse(name, response) {
  const schema = getResponseSchema(name);
  return v.validate(response, schema).errors;
}

