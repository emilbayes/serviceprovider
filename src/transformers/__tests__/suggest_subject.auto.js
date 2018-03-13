// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"fisk","type":"subject","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'fisk', type: 'subject', limit: 3, fields: ['term']};

const expected = {
  statusCode: 200,
  data: [{term: 'biografiske'}, {term: 'fisk'}, {term: 'fiskeri'}]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["suggestsubject",{"qs":{"query":"fisk","rs":3,"n":3}}]':
    '{"responseHeader": {"svn-revision": "106527", "ab-id": "1", "rt_searches": ["fisk", "fiske", "fisker"], "args": {"hr": "None", "hl": "None", "rs": "3"}, "q": "fisk", "version": "0.2.0", "build": "549", "time": 10}, "response": {"suggestions": [{"frequency": 539916, "suggestion": "biografiske"}, {"frequency": 69469, "suggestion": "fisk"}, {"frequency": 54986, "suggestion": "fiskeri"}], "numFound": 137}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_subject.auto', () => {
  it('has same result as recorded (in suggest_subject.auto)', done => {
    assert(
      Date.now() < +new Date('2018-03-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    provider
      .execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});