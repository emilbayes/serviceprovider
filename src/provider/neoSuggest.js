'use strict';
/**
 * @file
 * Suggest Transformers
 *
 * The file contains several transformer functions:
 *
 *  * creatorSuggestTransformer
 *    Returns creator suggestions based on query
 *  * librarySuggestTransformer
 *    Returns library suggestions based on query
 *  * subjectSuggestTransformer
 *    Returns subject suggestions based on query
 *  * popSuggestTransformer
 *    Returns solr documents sorted according to loan count
 *  * suggestTransformer
 *    Transformer bsaed on the above mentioned transformers.
 *    The suggestTransformer supports 4 types of suggestions:
 *    creator, library, subject and title
 */

import {clone} from 'lodash';
import genericTransformer from '../genericTransformer.js';
import entitySuggest from '../services/EntitySuggest/neoClient.js';
import popSuggest from '../services/PopSuggest/client.js';
import utils from '../utils.js';

function changeKey(obj, fromKey, toKey) {
  if (obj.hasOwnProperty(fromKey)) {
    obj[toKey] = obj[fromKey];
    delete obj[fromKey];
  }
  return obj;
}


function subjectSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  let clientRequest = {query: request.q, n: request.limit};
  return clientRequest;
}

function subjectSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response.response.suggestions.map((obj) => {
    return {str: obj.suggestion};
  });
}

function subjectSuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getSubjectSuggestions(request);
  };
}

export function subjectSuggestTransformer() {
  return genericTransformer(subjectSuggestRequest,
                            subjectSuggestResponse,
                            subjectSuggestFunction);
}


function creatorSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  let clientRequest = {query: request.q, n: request.limit};
  return clientRequest;
}

function creatorSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response.response.suggestions.map((obj) => {
    return {str: obj.suggestion};
  });
}

function creatorSuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getCreatorSuggestions(request);
  };
}

export function creatorSuggestTransformer() {
  return genericTransformer(creatorSuggestRequest,
                            creatorSuggestResponse,
                            creatorSuggestFunction);
}


function librarySuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  let clientRequest = {query: request.q, n: request.limit};
  return clientRequest;
}

function librarySuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response;
}

function librarySuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getLibrarySuggestions(request);
  };
}

export function librarySuggestTransformer() {
  return genericTransformer(librarySuggestRequest,
                            librarySuggestResponse,
                            librarySuggestFunction);
}


function popSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  let clientRequest = {query: request.q, rows: request.limit, fields: request.fields};
  return clientRequest;
}

function popSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response.response.docs.map((obj) => {
    return {str: obj['display.title'][0], id: obj.fedoraPid};
  });
}

function popSuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'popEndpoint', 'endpoint');
  let client = popSuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getPopSuggestions(request);
  };
}

export function popSuggestTransformer() {
  return genericTransformer(popSuggestRequest,
                            popSuggestResponse,
                            popSuggestFunction);
}


function suggestRequest(request, context) { // eslint-disable-line no-unused-vars

  let requestEnvelope = {type: request.type,
                         request: {q: request.q,
                                   limit: request.limit}};

  if (requestEnvelope.type === 'title') {
    requestEnvelope.request.fields = 'display.title,fedoraPid';
    requestEnvelope.request.q = 'display.title:{!complexphrase inOrder=true df=display.title}' +
                                requestEnvelope.request.q;
  }
  return requestEnvelope;
}

function suggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response;
}


function suggestFunction(context) {

  let transformers = {subject: subjectSuggestTransformer(),
                      creator: creatorSuggestTransformer(),
                      library: librarySuggestTransformer(),
                      title: popSuggestTransformer()};

  return (requestEnvelope, localContext) => { // eslint-disable-line no-unused-vars
    if (!transformers.hasOwnProperty(requestEnvelope.type)) {
      utils.die('SuggestFunction "' + requestEnvelope.type + '" is unknown');
    }
    return transformers[requestEnvelope.type](requestEnvelope.request, context);
  };
}


export function suggestTransformer() {
  return genericTransformer(suggestRequest,
                            suggestResponse,
                            suggestFunction);
}