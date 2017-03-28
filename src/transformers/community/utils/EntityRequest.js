/**
 * @file
 * Class for making requests to Elvis. Exposes methods for CRUD request.
 *
 * @todo
 * Extend with methods for making nested queries.
 */

export default class EntityRequest {
  constructor(type, call, modelUtils) {
    this._type = type;
    this._call = call;
    this._modelUtils = modelUtils;
  }

  /**
   * Return response (json string or object) as object.
   *
   * @param response {String|Object}
   * @returns {Object}
   * @private
   */
  _parseResponse(response) {
    return (typeof response === 'string') && JSON.parse(response) || response;
  }

  /**
   * Create Response object.
   *
   * @param data {Object}
   * @param errors {Array}
   * @returns {Object}
   * @private
   */
  _createResponse(data = {}, errors = []) {
    if (errors) {
      return this._parseErrors(errors);
    }
    return {
      status: 200,
      data: data,
      errors: errors
    };
  }

  /**
   * Convert errors to response.
   * @param errors
   * @returns {{status: (*|number), error: (boolean|*), data: Array}}
   * @private
   */
  _parseErrors(errors) {
    const error = Array.isArray(errors) && errors[0] || errors;
    const status = error.status || 500;
    delete error.status;
    return {
      status,
      error,
      data: []
    };
  }

  /**
   * Validate object against utility method.
   *
   * @param object
   * @returns {Object|null} Returns response object if validation errors exists. Otherwise null.
   * @private
   */
  _validate(object) {
    const validateErrors = this._modelUtils.validate(object);
    if (validateErrors.length) {
      return {
        status: 400,
        errors: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n'),
        data: []
      };
    }
    return null;
  }

  /**
   * Make request to Elvis.
   *
   * @param path {String} Endpoint in Elvis
   * @param method {String} post|get|put|delete
   * @param params {Object} parameters object. most often json or empty.
   * @returns {Promise}
   * @private
   */
  async _request(path, method = 'get', params = {}) {
    const options = Object.assign({path, method}, params);
    try {
      const response = await this._call(options);
      return this._parseResponse(response);
    }
    catch (error) {
      return {errors: error};
    }
  }

  async get(id) {
    const {data, errors} = await this._request(`entity/${id}`);
    return this._createResponse(this._modelUtils.mapperFromElvis(data), errors);
  }

  async post(object) {
    const validationError = this._validate(object);
    if (validationError) {
      return validationError;
    }
    const json = this._modelUtils.mapperToElvis(object);
    json.type = this._type;

    const {data, errors} = await this._request('entity', 'post', {json});
    return this._createResponse(this._modelUtils.mapperFromElvis(data), errors);
  }

  async put(id, object) {
    const validationError = this._validate(object);
    if (validationError) {
      return validationError;
    }
    const json = this._modelUtils.mapperToElvis(object);
    console.log(json);
    const {data, errors} = await this._request(`entity/${id}`, 'put', {json});
    return this._createResponse(this._modelUtils.mapperFromElvis(data), errors);
  }

  async delete(id, deletedById) {

    const json = {modified_by: deletedById};
    const {data, errors} = await this._request(`entity/${id}`, 'put', {json});
    return this._createResponse(this._modelUtils.mapperFromElvis(data), errors);
  }

  /**
   * Get all objects of type
   *
   * @todo Add limit, order and sort parameters.
   *
   * @returns {{status, data, errors}|*}
   */
  async getList() {
    const json = {
      Entities: {type: this._type},
      SortBy: 'created_epoch',
      Order: 'descending',
      Limit: 2,
      Offset: 0,
      Include: this._modelUtils.map
    };
    const {data, errors} = await this._request('query', 'post', {json});
    return this._createResponse(data, errors);
  }
}
