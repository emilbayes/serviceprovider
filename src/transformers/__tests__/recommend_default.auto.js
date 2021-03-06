// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {
  like: [
    '870970-basis:45488713',
    '870970-basis:28643713',
    '870970-basis:29494940',
    '870970-basis:29386404',
    '870970-basis:28429576'
  ],
  limit: 10
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:50625532',
      val: 0.26559156568643216,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:28824130',
      val: 0.26262617774343394,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:28277350',
      val: 0.24994906120900962,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:28682417',
      val: 0.24451693515521952,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:29060835',
      val: 0.24279720203323216,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:28538952',
      val: 0.24006497609832297,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:45188981',
      val: 0.23852676426581199,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:51320352',
      val: 0.23096783039846508,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:29953554',
      val: 0.23048290224725712,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    },
    {
      pid: '870970-basis:50740447',
      val: 0.23042314825346377,
      from: [
        '870970-basis:45488713',
        '870970-basis:29494940',
        '870970-basis:28643713',
        '870970-basis:28429576',
        '870970-basis:29386404'
      ]
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'XXXXX',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}}]': {
    responseHeader: {
      numReturned: 10,
      time: 260,
      recommender: 'loan-cosim',
      timings: {
        booster: 0.014,
        fetch: 0.015000000000000001,
        workids: 88.491,
        total: 255.023,
        work2meta: 23.216,
        ignore: 0.051,
        'from-analysis': 63.89300000000001,
        filter: 76.474,
        augment: 0.067
      },
      build: 'not available',
      version: 'devel',
      'ab-id': '1',
      git: 'not available'
    },
    response: [
      {
        pid: '870970-basis:50625532',
        val: 0.26559156568643216,
        loancount: 20219,
        'debug-creator': 'Mari Jungstedt',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Den farlige leg',
        'debug-work': 'work:997928'
      },
      {
        pid: '870970-basis:28824130',
        val: 0.26262617774343394,
        loancount: 20371,
        'debug-creator': 'Mari Jungstedt',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Den mørke engel',
        'debug-work': 'work:973589'
      },
      {
        pid: '870970-basis:28277350',
        val: 0.24994906120900962,
        loancount: 19427,
        'debug-creator': 'Mari Jungstedt',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'I denne søde sommertid',
        'debug-work': 'work:950964'
      },
      {
        pid: '870970-basis:28682417',
        val: 0.24451693515521952,
        loancount: 24820,
        'debug-creator': 'Camilla Läckberg',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Fyrmesteren',
        'debug-work': 'work:969734'
      },
      {
        pid: '870970-basis:29060835',
        val: 0.24279720203323216,
        loancount: 29418,
        'debug-creator': 'Sara Blædel',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'De glemte piger',
        'debug-work': 'work:987105'
      },
      {
        pid: '870970-basis:28538952',
        val: 0.24006497609832297,
        loancount: 27351,
        'debug-creator': 'Sara Blædel',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Dødsenglen',
        'debug-work': 'work:963364'
      },
      {
        pid: '870970-basis:45188981',
        val: 0.23852676426581199,
        loancount: 22792,
        'debug-creator': 'Camilla Läckberg',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Englemagersken',
        'debug-work': 'work:997705'
      },
      {
        pid: '870970-basis:51320352',
        val: 0.23096783039846508,
        loancount: 27108,
        'debug-creator': 'Sara Blædel',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Kvinden de meldte savnet',
        'debug-work': 'work:1408396'
      },
      {
        pid: '870970-basis:29953554',
        val: 0.23048290224725712,
        loancount: 19440,
        'debug-creator': 'Elsebeth Egholm',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Eget ansvar',
        'debug-work': 'work:1020878'
      },
      {
        pid: '870970-basis:50740447',
        val: 0.23042314825346377,
        loancount: 21671,
        'debug-creator': 'Liza Marklund',
        from: [
          '870970-basis:45488713',
          '870970-basis:29494940',
          '870970-basis:28643713',
          '870970-basis:28429576',
          '870970-basis:29386404'
        ],
        'debug-title': 'Noras bog',
        'debug-work': 'work:1399529'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_default.auto', () => {
  it('has same result as recorded (in recommend_default.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-19'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
