/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: listEntities {"limit":"10","offset":"0","_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"integer","readOnly":true},"modified_epoch":{"type":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.6/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.7.1/',
    openorder: 'https://openorder.addi.dk/test_2.7.1/',
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
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {
    id: 1
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
    agency: '100451',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  },
  crud: {}
};
const provider = Provider();
const mockData = {
  '["http://localhost:4010/v1/community/1/query",{"method":"post","json":{"Profiles":{},"SortBy":"id","Order":"descending","Limit":"10","Offset":"0","Include":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"}}}]': {
    data: {
      Total: 1000,
      NextOffset: 10,
      List: [
        {
          username: 'Keshawn',
          email: 'Brayan_Bechtelar93@yahoo.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 1000
        },
        {
          username: 'Dianna',
          email: 'Jace62@yahoo.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 999
        },
        {
          username: 'Barton',
          email: 'Athena_Crooks86@hotmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 998
        },
        {
          username: 'Ulices',
          email: 'Mara20@gmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 997
        },
        {
          username: 'Fidel',
          email: 'Allie_Ferry@hotmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 996
        },
        {
          username: 'Verdie',
          email: 'Kade_Kohler@gmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 995
        },
        {
          username: 'Dave',
          email: 'Maida_Keeling@yahoo.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 994
        },
        {
          username: 'Trevor',
          email: 'Margret20@gmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 993
        },
        {
          username: 'Raphael',
          email: 'Liliane.Pfeffer38@hotmail.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 992
        },
        {
          username: 'Lenny',
          email: 'Gerry46@yahoo.com',
          created_epoch: 1493296959,
          modified_epoch: 1493296959,
          modified_by: null,
          deleted_epoch: null,
          id: 991
        }
      ]
    }
  }
};

describe('Automated test: list_profiles', () => {
  it('expected response. ID:dnk728, for {"limit":"10","offset":"0","_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"integer","readOnly":true},"modified_epoch":{"type":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'listEntities',
        {
          limit: '10',
          offset: '0',
          _meta: {
            type: null,
            elvisType: 'profile',
            schemaMap: {
              username: 'name',
              displayName: 'attributes.displayName',
              description: 'attributes.description',
              email: 'attributes.email',
              phone: 'attributes.phone',
              created_epoch: 'created_epoch',
              modified_epoch: 'modified_epoch',
              modified_by: 'modified_by',
              deleted_epoch: 'deleted_epoch',
              birthday: 'attributes.birthday',
              fullName: 'attributes.fullName',
              id: 'id'
            },
            schema: {
              type: 'object',
              properties: {
                username: {type: 'string'},
                displayName: {type: 'string'},
                description: {type: 'string'},
                email: {type: 'string'},
                phone: {type: 'string'},
                created_epoch: {type: 'integer', readOnly: true},
                modified_epoch: {type: 'integer', readOnly: true},
                modified_by: {type: 'integer'},
                deleted_epoch: {type: 'integer', readOnly: true},
                birthday: {type: 'string', format: 'date'},
                fullName: {type: 'string'},
                id: {type: 'integer', readOnly: true}
              },
              required: ['username'],
              additionalProperties: false
            }
          }
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          status: 200,
          data: {
            Total: 1000,
            NextOffset: 10,
            List: [
              {
                username: 'Keshawn',
                email: 'Brayan_Bechtelar93@yahoo.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 1000
              },
              {
                username: 'Dianna',
                email: 'Jace62@yahoo.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 999
              },
              {
                username: 'Barton',
                email: 'Athena_Crooks86@hotmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 998
              },
              {
                username: 'Ulices',
                email: 'Mara20@gmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 997
              },
              {
                username: 'Fidel',
                email: 'Allie_Ferry@hotmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 996
              },
              {
                username: 'Verdie',
                email: 'Kade_Kohler@gmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 995
              },
              {
                username: 'Dave',
                email: 'Maida_Keeling@yahoo.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 994
              },
              {
                username: 'Trevor',
                email: 'Margret20@gmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 993
              },
              {
                username: 'Raphael',
                email: 'Liliane.Pfeffer38@hotmail.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 992
              },
              {
                username: 'Lenny',
                email: 'Gerry46@yahoo.com',
                created_epoch: 1493296959,
                modified_epoch: 1493296959,
                modified_by: null,
                deleted_epoch: null,
                id: 991
              }
            ]
          },
          errors: []
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            status: 200,
            data: {
              Total: 1000,
              NextOffset: 10,
              List: [
                {
                  username: 'Keshawn',
                  email: 'Brayan_Bechtelar93@yahoo.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 1000
                },
                {
                  username: 'Dianna',
                  email: 'Jace62@yahoo.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 999
                },
                {
                  username: 'Barton',
                  email: 'Athena_Crooks86@hotmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 998
                },
                {
                  username: 'Ulices',
                  email: 'Mara20@gmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 997
                },
                {
                  username: 'Fidel',
                  email: 'Allie_Ferry@hotmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 996
                },
                {
                  username: 'Verdie',
                  email: 'Kade_Kohler@gmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 995
                },
                {
                  username: 'Dave',
                  email: 'Maida_Keeling@yahoo.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 994
                },
                {
                  username: 'Trevor',
                  email: 'Margret20@gmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 993
                },
                {
                  username: 'Raphael',
                  email: 'Liliane.Pfeffer38@hotmail.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 992
                },
                {
                  username: 'Lenny',
                  email: 'Gerry46@yahoo.com',
                  created_epoch: 1493296959,
                  modified_epoch: 1493296959,
                  modified_by: null,
                  deleted_epoch: null,
                  id: 991
                }
              ]
            },
            errors: []
          }
        );
        done();
      });
  });
});
