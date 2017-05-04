/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: createEntity {"reason":"this is the reason","profile_id":1,"reference":{"type":"post","id":5},"_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    },
    "communityservice": "http://localhost:3001/v1"
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {
    "user": "XXXXX",
    "group": "XXXXX",
    "password": "XXXXX"
  },
  "user": {
    "agency": "100451",
    "id": "XXXXX",
    "pin": "XXXXX",
    "salt": "XXXXX"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101",
    "orderSystem": "bibliotekdk"
  },
  "crud": {}
};
const provider = Provider();
const mockData = {
  "[\"http://localhost:3001/v1/community/1/action\",{\"method\":\"post\",\"json\":{\"attributes\":{\"reason\":\"this is the reason\",\"reference\":{\"type\":\"post\",\"id\":5}},\"owner_id\":1,\"entity_ref\":5,\"type\":\"flag\"}}]": {
    "links": {
      "self": "/v1/community/1/action/16"
    },
    "data": {
      "id": 16,
      "created_epoch": 1493715177,
      "deleted_epoch": null,
      "modified_epoch": 1493715177,
      "modified_by": null,
      "deleted_by": null,
      "community_id": 1,
      "owner_id": 1,
      "start_epoch": null,
      "end_epoch": null,
      "entity_ref": 5,
      "profile_ref": null,
      "type": "flag",
      "attributes": {
        "reason": "this is the reason",
        "reference": {
          "id": 5,
          "type": "post"
        }
      },
      "log": null
    }
  }
};

describe('Automated test: createFlag', () => {
  it('expected response. ID:ff9jmy, for {"reason":"this is the reason","profile_id":1,"reference":{"type":"post","id":5},"_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('createEntity', {"reason":"this is the reason","profile_id":1,"reference":{"type":"post","id":5},"_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "reason": "this is the reason",
    "reference": {
      "id": 5,
      "type": "post"
    },
    "profile_id": 1,
    "created_epoch": 1493715177,
    "modified_epoch": 1493715177,
    "id": 16
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "reason": "this is the reason",
    "reference": {
      "id": 5,
      "type": "post"
    },
    "profile_id": 1,
    "created_epoch": 1493715177,
    "modified_epoch": 1493715177,
    "id": 16
  },
  "errors": []
});
        done();
      });
  });
});
