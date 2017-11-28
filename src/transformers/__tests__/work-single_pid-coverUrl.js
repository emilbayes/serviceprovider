/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: work {"pids":["870970-basis:28448716"],"fields":["coverUrlFull"]}

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
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
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
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:28448716","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28448716","@":"mi"},"@":"mi"},"backImage":[{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=8065016731fc69babeb1","@imageSize":{"$":"detail_117","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=b003f836d26124a22d28","@imageSize":{"$":"detail_207","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=72102d913e9c7aefd1bc","@imageSize":{"$":"detail_42","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=c072256700c514168e98","@imageSize":{"$":"detail_500","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=b569933d2802175dbaa7","@imageSize":{"$":"thumbnail","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=6e7b43d7774cf915fea0","@imageSize":{"$":"detail","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"}],"backPage":[{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=1c1aaa6b9be906af3601","@":"mi"}],"coverImage":[{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2","@imageSize":{"$":"detail_117","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845","@imageSize":{"$":"detail_207","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f","@imageSize":{"$":"detail_42","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345","@imageSize":{"$":"detail_500","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1","@imageSize":{"$":"thumbnail","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"},{"$":"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4","@imageSize":{"$":"detail","@":"mi"},"@imageFormat":{"$":"jpeg","@":"mi"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n'
};

describe('Automated test: work-single_pid-coverUrl', () => {
  it('expected response. ID:5l12y3, for {"pids":["870970-basis:28448716"],"fields":["coverUrlFull"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'work',
        {pids: ['870970-basis:28448716'], fields: ['coverUrlFull']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              coverUrl117: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2'
              ],
              coverUrl207: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845'
              ],
              coverUrl42: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f'
              ],
              coverUrl500: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345'
              ],
              coverUrlThumbnail: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1'
              ],
              coverUrlFull: [
                '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4'
              ]
            }
          ]
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: [
              {
                coverUrl117: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2'
                ],
                coverUrl207: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845'
                ],
                coverUrl42: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f'
                ],
                coverUrl500: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345'
                ],
                coverUrlThumbnail: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1'
                ],
                coverUrlFull: [
                  '//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4'
                ]
              }
            ]
          }
        );
        done();
      });
  });
});
