/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import suggestTransformer from '../transformers/suggest.js';
import facetTransformer from '../transformers/facets';
import searchTransformer from '../transformers/search';
import librariesTransformer from '../transformers/libraries';
import userTransformer from '../transformers/user';
import renewTransformer from '../transformers/renew';
import orderTransformer from '../transformers/order';
import workTransformer from '../transformers/work';
import statusTransformer from '../transformers/status';
import availabilityTransformer from '../transformers/availability';
import {ddbcms, news, events, library} from '../transformers/ddbcms';
import caller from './caller';
import {testTransformer} from '../transformers/testTransformer.js';
import recommendTransformer from '../transformers/recommend';

import createEntity from '../transformers/createEntity';
import updateEntity from '../transformers/updateEntity';
import listEntities from '../transformers/listEntities';
import getSingleProperty from '../transformers/getSingleProperty';
import getEntity from '../transformers/getEntity';
import deleteEntity from '../transformers/deleteEntity';

/**
 * Initialization of the provider and the underlying services.
 *
 * @param {Object} config Object containing the necessary parameters.
 *
 * @api public
 */
export default function Provider() {
  /**
   * Structure containing all the new transformers.
   */
  const transformerMap = {
    ddbcms: ddbcms,
    events: events,
    news: news,
    library: library,
    renew: renewTransformer,
    search: searchTransformer,
    libraries: librariesTransformer,
    facets: facetTransformer,
    recommend: recommendTransformer,
    suggest: suggestTransformer,
    user: userTransformer,
    order: orderTransformer,
    work: workTransformer,
    test: testTransformer,
    availability: availabilityTransformer,
    status: statusTransformer
  };

  const crudTransformerMap = {
    createEntity,
    updateEntity,
    listEntities,
    getEntity,
    deleteEntity,
    getSingleProperty
  };

  // we are going to reimplement a simpler mechanism to call the transformers
  function execute(name, params, context) {
    // eslint-disable-line no-unused-vars
    if (context.crud) {
      return caller(crudTransformerMap, context).call(name, params);
    }

    return caller(transformerMap, context).call(name, params);
  }

  function availableTransforms() {
    return Object.keys(Object.assign({}, transformerMap, crudTransformerMap));
  }

  function hasTransformer(name) {
    return transformerMap.hasOwnProperty(name);
  }

  return {
    availableTransforms,
    execute,
    hasTransformer
  };
}
