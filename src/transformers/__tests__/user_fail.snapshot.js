/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: user {}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.6/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    openorder: 'https://openorder.addi.dk/2.7.1/',
    TESTopenorder: 'https://openorder.addi.dk/test_2.7.1/',
    opensearch: 'http://opensearch.addi.dk/b3.0_4.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    }
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
  netpunkt: {
    user: 'XXXXX',
    group: 'XXXXX',
    password: 'XXXXX'
  },
  user: {
    agency: '775100',
    librarytype: 'folkebibliotek',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101'
  }
};
let provider = Provider();
let mockData = {
  '["openuserstatus",{"qs":{"agencyId":"775100","userId":"XXXXX","userPincode":"XXXXX","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","action":"getUserStatus","outputType":"json"}}]':
    '{"getUserStatusResponse":{"getUserStatusError":{"$":"User authentication failed","@":"ous"},"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

describe('Automated test: user-fail', () => {
  it('expected response. ID:w9nfwz, for {}', done => {
    context.mockData = mockData;
    provider
      .execute('user', {}, context)
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 500,
          error: 'User authentication failed'
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 500,
            error: 'User authentication failed'
          }
        );
        done();
      });
  });
});
