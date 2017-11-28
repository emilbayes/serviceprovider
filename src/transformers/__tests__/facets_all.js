/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: facets {"q":"ost","fields":["access","acSource","audience","audienceCategory","branch","category","creator","creatorFunction","date","department","dk5","extraTitles","fictionSubject","form","gamePlatform","genre","genreCategory","geographic","language","level","let","literaryForm","lix","musicSubject","nationality","nonFictionSubject","partOf","period","primaryCreator","sheetMusic","subject","titleSeries","type"],"limit":2}

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
  user: {agency: '775100', id: 'XXXXX', pin: 'XXXXX', salt: 'XXXXX'},
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101'
  }
};
let provider = Provider();
let mockData = {
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>ost</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>2</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.access</open:facetName>\\n        <open:facetName>facet.acSource</open:facetName>\\n        <open:facetName>facet.audience</open:facetName>\\n        <open:facetName>facet.audienceCategory</open:facetName>\\n        <open:facetName>facet.branch</open:facetName>\\n        <open:facetName>facet.category</open:facetName>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.creatorFunction</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.department</open:facetName>\\n        <open:facetName>facet.dk5</open:facetName>\\n        <open:facetName>facet.extraTitles</open:facetName>\\n        <open:facetName>facet.fictionSubject</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n        <open:facetName>facet.gamePlatform</open:facetName>\\n        <open:facetName>facet.genre</open:facetName>\\n        <open:facetName>facet.genreCategory</open:facetName>\\n        <open:facetName>facet.geographic</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.level</open:facetName>\\n        <open:facetName>facet.let</open:facetName>\\n        <open:facetName>facet.literaryForm</open:facetName>\\n        <open:facetName>facet.lix</open:facetName>\\n        <open:facetName>facet.musicSubject</open:facetName>\\n        <open:facetName>facet.nationality</open:facetName>\\n        <open:facetName>facet.nonFictionSubject</open:facetName>\\n        <open:facetName>facet.partOf</open:facetName>\\n        <open:facetName>facet.period</open:facetName>\\n        <open:facetName>facet.primaryCreator</open:facetName>\\n        <open:facetName>facet.sheetMusic</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.titleSeries</open:facetName>\\n        <open:facetName>facet.type</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"153"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.access"},"facetTerm":[{"frequence":{"$":"8"},"term":{"$":"begr\\u00e6nset adgang"}}]},{"facetName":{"$":"facet.acSource"},"facetTerm":[{"frequence":{"$":"142"},"term":{"$":"bibliotekskatalog"}},{"frequence":{"$":"7"},"term":{"$":"ereolen"}}]},{"facetName":{"$":"facet.audience"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"tilladt for alle"}},{"frequence":{"$":"3"},"term":{"$":"fra 5 \\u00e5r"}}]},{"facetName":{"$":"facet.audienceCategory"},"facetTerm":[{"frequence":{"$":"20"},"term":{"$":"for 7 \\u00e5r"}},{"frequence":{"$":"17"},"term":{"$":"for 8 \\u00e5r"}}]},{"facetName":{"$":"facet.branch"},"facetTerm":[{"frequence":{"$":"89"},"term":{"$":"hb"}},{"frequence":{"$":"46"},"term":{"$":"ris"}}]},{"facetName":{"$":"facet.category"},"facetTerm":[{"frequence":{"$":"86"},"term":{"$":"voksenmaterialer"}},{"frequence":{"$":"68"},"term":{"$":"b\\u00f8rnematerialer"}}]},{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"9"},"term":{"$":"hanne hastrup"}},{"frequence":{"$":"9"},"term":{"$":"jannik hastrup"}}]},{"facetName":{"$":"facet.creatorFunction"},"facetTerm":[{"frequence":{"$":"9"},"term":{"$":"jannik hastrup"}},{"frequence":{"$":"8"},"term":{"$":"hanne hastrup"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"11"},"term":{"$":"2008"}},{"frequence":{"$":"9"},"term":{"$":"2000"}}]},{"facetName":{"$":"facet.department"}},{"facetName":{"$":"facet.dk5"},"facetTerm":[{"frequence":{"$":"39"},"term":{"$":"sk\\u00f8nlitteratur"}},{"frequence":{"$":"12"},"term":{"$":"63.7"}}]},{"facetName":{"$":"facet.extraTitles"}},{"facetName":{"$":"facet.fictionSubject"},"facetTerm":[{"frequence":{"$":"12"},"term":{"$":"mus"}},{"frequence":{"$":"7"},"term":{"$":"sjove b\\u00f8ger"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"29"},"term":{"$":"kogeb\\u00f8ger"}},{"frequence":{"$":"26"},"term":{"$":"opskrifter"}}]},{"facetName":{"$":"facet.gamePlatform"}},{"facetName":{"$":"facet.genre"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"b\\u00f8rnefilm"}},{"frequence":{"$":"6"},"term":{"$":"rock"}}]},{"facetName":{"$":"facet.genreCategory"},"facetTerm":[{"frequence":{"$":"71"},"term":{"$":"nonfiktion"}},{"frequence":{"$":"53"},"term":{"$":"fiktion"}}]},{"facetName":{"$":"facet.geographic"},"facetTerm":[{"frequence":{"$":"19"},"term":{"$":"danmark"}},{"frequence":{"$":"5"},"term":{"$":"frankrig"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"121"},"term":{"$":"dansk"}},{"frequence":{"$":"17"},"term":{"$":"blandede sprog"}}]},{"facetName":{"$":"facet.level"},"facetTerm":[{"frequence":{"$":"38"},"term":{"$":"alment niveau"}},{"frequence":{"$":"4"},"term":{"$":"folkeskoleniveau"}}]},{"facetName":{"$":"facet.let"},"facetTerm":[{"frequence":{"$":"3"},"term":{"$":"16"}},{"frequence":{"$":"2"},"term":{"$":"14"}}]},{"facetName":{"$":"facet.literaryForm"},"facetTerm":[{"frequence":{"$":"71"},"term":{"$":"faglitteratur"}},{"frequence":{"$":"53"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.lix"},"facetTerm":[{"frequence":{"$":"2"},"term":{"$":"07"}},{"frequence":{"$":"2"},"term":{"$":"15"}}]},{"facetName":{"$":"facet.musicSubject"},"facetTerm":[{"frequence":{"$":"20"},"term":{"$":"vokal"}},{"frequence":{"$":"9"},"term":{"$":"b\\u00f8rnemusik"}}]},{"facetName":{"$":"facet.nationality"},"facetTerm":[{"frequence":{"$":"1"},"term":{"$":"danske film"}},{"frequence":{"$":"1"},"term":{"$":"tyske film"}}]},{"facetName":{"$":"facet.nonFictionSubject"},"facetTerm":[{"frequence":{"$":"13"},"term":{"$":"ost"}},{"frequence":{"$":"5"},"term":{"$":"tapas"}}]},{"facetName":{"$":"facet.partOf"}},{"facetName":{"$":"facet.period"},"facetTerm":[{"frequence":{"$":"13"},"term":{"$":"1990-1999"}},{"frequence":{"$":"10"},"term":{"$":"2000-2009"}}]},{"facetName":{"$":"facet.primaryCreator"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"john h\\u00f8ybye"}},{"frequence":{"$":"4"},"term":{"$":"hans-henrik ley"}}]},{"facetName":{"$":"facet.sheetMusic"},"facetTerm":[{"frequence":{"$":"4"},"term":{"$":"alle partiturer"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"29"},"term":{"$":"kogeb\\u00f8ger"}},{"frequence":{"$":"27"},"term":{"$":"opskrifter"}}]},{"facetName":{"$":"facet.titleSeries"},"facetTerm":[{"frequence":{"$":"3"},"term":{"$":"mini zoom. mellem"}},{"frequence":{"$":"3"},"term":{"$":"small world"}}]},{"facetName":{"$":"facet.type"},"facetTerm":[{"frequence":{"$":"91"},"term":{"$":"bog"}},{"frequence":{"$":"17"},"term":{"$":"cd (musik)"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.889284"},"trackingId":{"$":"2016-05-30T20:50:57:732088:13159"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: facets_all', () => {
  it('expected response. ID:l5xezc, for {"q":"ost","fields":["access","acSource","audience","audienceCategory","branch","category","creator","creatorFunction","date","department","dk5","extraTitles","fictionSubject","form","gamePlatform","genre","genreCategory","geographic","language","level","let","literaryForm","lix","musicSubject","nationality","nonFictionSubject","partOf","period","primaryCreator","sheetMusic","subject","titleSeries","type"],"limit":2}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'facets',
        {
          q: 'ost',
          fields: [
            'access',
            'acSource',
            'audience',
            'audienceCategory',
            'branch',
            'category',
            'creator',
            'creatorFunction',
            'date',
            'department',
            'dk5',
            'extraTitles',
            'fictionSubject',
            'form',
            'gamePlatform',
            'genre',
            'genreCategory',
            'geographic',
            'language',
            'level',
            'let',
            'literaryForm',
            'lix',
            'musicSubject',
            'nationality',
            'nonFictionSubject',
            'partOf',
            'period',
            'primaryCreator',
            'sheetMusic',
            'subject',
            'titleSeries',
            'type'
          ],
          limit: 2
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            access: [{term: 'begrænset adgang', frequency: 8}],
            acSource: [
              {term: 'bibliotekskatalog', frequency: 142},
              {term: 'ereolen', frequency: 7}
            ],
            audience: [
              {term: 'tilladt for alle', frequency: 6},
              {term: 'fra 5 år', frequency: 3}
            ],
            audienceCategory: [
              {term: 'for 7 år', frequency: 20},
              {term: 'for 8 år', frequency: 17}
            ],
            branch: [{term: 'hb', frequency: 89}, {term: 'ris', frequency: 46}],
            category: [
              {term: 'voksenmaterialer', frequency: 86},
              {term: 'børnematerialer', frequency: 68}
            ],
            creator: [
              {term: 'hanne hastrup', frequency: 9},
              {term: 'jannik hastrup', frequency: 9}
            ],
            creatorFunction: [
              {term: 'jannik hastrup', frequency: 9},
              {term: 'hanne hastrup', frequency: 8}
            ],
            date: [{term: '2008', frequency: 11}, {term: '2000', frequency: 9}],
            dk5: [
              {term: 'skønlitteratur', frequency: 39},
              {term: '63.7', frequency: 12}
            ],
            fictionSubject: [
              {term: 'mus', frequency: 12},
              {term: 'sjove bøger', frequency: 7}
            ],
            form: [
              {term: 'kogebøger', frequency: 29},
              {term: 'opskrifter', frequency: 26}
            ],
            genre: [
              {term: 'børnefilm', frequency: 6},
              {term: 'rock', frequency: 6}
            ],
            genreCategory: [
              {term: 'nonfiktion', frequency: 71},
              {term: 'fiktion', frequency: 53}
            ],
            geographic: [
              {term: 'danmark', frequency: 19},
              {term: 'frankrig', frequency: 5}
            ],
            language: [
              {term: 'dansk', frequency: 121},
              {term: 'blandede sprog', frequency: 17}
            ],
            level: [
              {term: 'alment niveau', frequency: 38},
              {term: 'folkeskoleniveau', frequency: 4}
            ],
            let: [{term: '16', frequency: 3}, {term: '14', frequency: 2}],
            literaryForm: [
              {term: 'faglitteratur', frequency: 71},
              {term: 'skønlitteratur', frequency: 53}
            ],
            lix: [{term: '07', frequency: 2}, {term: '15', frequency: 2}],
            musicSubject: [
              {term: 'vokal', frequency: 20},
              {term: 'børnemusik', frequency: 9}
            ],
            nationality: [
              {term: 'danske film', frequency: 1},
              {term: 'tyske film', frequency: 1}
            ],
            nonFictionSubject: [
              {term: 'ost', frequency: 13},
              {term: 'tapas', frequency: 5}
            ],
            period: [
              {term: '1990-1999', frequency: 13},
              {term: '2000-2009', frequency: 10}
            ],
            primaryCreator: [
              {term: 'john høybye', frequency: 6},
              {term: 'hans-henrik ley', frequency: 4}
            ],
            sheetMusic: [{term: 'alle partiturer', frequency: 4}],
            subject: [
              {term: 'kogebøger', frequency: 29},
              {term: 'opskrifter', frequency: 27}
            ],
            titleSeries: [
              {term: 'mini zoom. mellem', frequency: 3},
              {term: 'small world', frequency: 3}
            ],
            type: [
              {term: 'bog', frequency: 91},
              {term: 'cd (musik)', frequency: 17}
            ]
          }
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: {
              access: [{term: 'begrænset adgang', frequency: 8}],
              acSource: [
                {term: 'bibliotekskatalog', frequency: 142},
                {term: 'ereolen', frequency: 7}
              ],
              audience: [
                {term: 'tilladt for alle', frequency: 6},
                {term: 'fra 5 år', frequency: 3}
              ],
              audienceCategory: [
                {term: 'for 7 år', frequency: 20},
                {term: 'for 8 år', frequency: 17}
              ],
              branch: [
                {term: 'hb', frequency: 89},
                {term: 'ris', frequency: 46}
              ],
              category: [
                {term: 'voksenmaterialer', frequency: 86},
                {term: 'børnematerialer', frequency: 68}
              ],
              creator: [
                {term: 'hanne hastrup', frequency: 9},
                {term: 'jannik hastrup', frequency: 9}
              ],
              creatorFunction: [
                {term: 'jannik hastrup', frequency: 9},
                {term: 'hanne hastrup', frequency: 8}
              ],
              date: [
                {term: '2008', frequency: 11},
                {term: '2000', frequency: 9}
              ],
              dk5: [
                {term: 'skønlitteratur', frequency: 39},
                {term: '63.7', frequency: 12}
              ],
              fictionSubject: [
                {term: 'mus', frequency: 12},
                {term: 'sjove bøger', frequency: 7}
              ],
              form: [
                {term: 'kogebøger', frequency: 29},
                {term: 'opskrifter', frequency: 26}
              ],
              genre: [
                {term: 'børnefilm', frequency: 6},
                {term: 'rock', frequency: 6}
              ],
              genreCategory: [
                {term: 'nonfiktion', frequency: 71},
                {term: 'fiktion', frequency: 53}
              ],
              geographic: [
                {term: 'danmark', frequency: 19},
                {term: 'frankrig', frequency: 5}
              ],
              language: [
                {term: 'dansk', frequency: 121},
                {term: 'blandede sprog', frequency: 17}
              ],
              level: [
                {term: 'alment niveau', frequency: 38},
                {term: 'folkeskoleniveau', frequency: 4}
              ],
              let: [{term: '16', frequency: 3}, {term: '14', frequency: 2}],
              literaryForm: [
                {term: 'faglitteratur', frequency: 71},
                {term: 'skønlitteratur', frequency: 53}
              ],
              lix: [{term: '07', frequency: 2}, {term: '15', frequency: 2}],
              musicSubject: [
                {term: 'vokal', frequency: 20},
                {term: 'børnemusik', frequency: 9}
              ],
              nationality: [
                {term: 'danske film', frequency: 1},
                {term: 'tyske film', frequency: 1}
              ],
              nonFictionSubject: [
                {term: 'ost', frequency: 13},
                {term: 'tapas', frequency: 5}
              ],
              period: [
                {term: '1990-1999', frequency: 13},
                {term: '2000-2009', frequency: 10}
              ],
              primaryCreator: [
                {term: 'john høybye', frequency: 6},
                {term: 'hans-henrik ley', frequency: 4}
              ],
              sheetMusic: [{term: 'alle partiturer', frequency: 4}],
              subject: [
                {term: 'kogebøger', frequency: 29},
                {term: 'opskrifter', frequency: 27}
              ],
              titleSeries: [
                {term: 'mini zoom. mellem', frequency: 3},
                {term: 'small world', frequency: 3}
              ],
              type: [
                {term: 'bog', frequency: 91},
                {term: 'cd (musik)', frequency: 17}
              ]
            }
          }
        );
        done();
      });
  });
});
