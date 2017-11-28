/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: facets {"q":"harry AND potter","fields":["creator"],"limit":20,"pretty":true}

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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry AND potter</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>20</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"220"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"112"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"21"},"term":{"$":"daniel radcliffe"}},{"frequence":{"$":"21"},"term":{"$":"emma watson"}},{"frequence":{"$":"21"},"term":{"$":"robbie coltrane"}},{"frequence":{"$":"21"},"term":{"$":"rupert grint"}},{"frequence":{"$":"19"},"term":{"$":"steve kloves"}},{"frequence":{"$":"16"},"term":{"$":"david yates"}},{"frequence":{"$":"16"},"term":{"$":"j.k. rowling"}},{"frequence":{"$":"15"},"term":{"$":"stephen fry"}},{"frequence":{"$":"14"},"term":{"$":"michael gambon"}},{"frequence":{"$":"13"},"term":{"$":"jesper christensen (f. 1948)"}},{"frequence":{"$":"12"},"term":{"$":"hanna l\\u00fctzen"}},{"frequence":{"$":"12"},"term":{"$":"john williams (f. 1932)"}},{"frequence":{"$":"10"},"term":{"$":"bill galliford"}},{"frequence":{"$":"10"},"term":{"$":"ethan neuburg"}},{"frequence":{"$":"10"},"term":{"$":"ralph fiennes"}},{"frequence":{"$":"10"},"term":{"$":"tod edmondson"}},{"frequence":{"$":"9"},"term":{"$":"helena bonham carter"}},{"frequence":{"$":"8"},"term":{"$":"chris columbus"}},{"frequence":{"$":"8"},"term":{"$":"richard griffiths"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.707937"},"trackingId":{"$":"2016-05-30T20:46:55:321296:22138"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: facets_high_limit', () => {
  it('expected response. ID:94654g, for {"q":"harry AND potter","fields":["creator"],"limit":20,"pretty":true}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'facets',
        {q: 'harry AND potter', fields: ['creator'], limit: 20, pretty: true},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            creator: [
              {term: 'joanne k. rowling', frequency: 112},
              {term: 'daniel radcliffe', frequency: 21},
              {term: 'emma watson', frequency: 21},
              {term: 'robbie coltrane', frequency: 21},
              {term: 'rupert grint', frequency: 21},
              {term: 'steve kloves', frequency: 19},
              {term: 'david yates', frequency: 16},
              {term: 'j.k. rowling', frequency: 16},
              {term: 'stephen fry', frequency: 15},
              {term: 'michael gambon', frequency: 14},
              {term: 'jesper christensen (f. 1948)', frequency: 13},
              {term: 'hanna lützen', frequency: 12},
              {term: 'john williams (f. 1932)', frequency: 12},
              {term: 'bill galliford', frequency: 10},
              {term: 'ethan neuburg', frequency: 10},
              {term: 'ralph fiennes', frequency: 10},
              {term: 'tod edmondson', frequency: 10},
              {term: 'helena bonham carter', frequency: 9},
              {term: 'chris columbus', frequency: 8},
              {term: 'richard griffiths', frequency: 8}
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
              creator: [
                {term: 'joanne k. rowling', frequency: 112},
                {term: 'daniel radcliffe', frequency: 21},
                {term: 'emma watson', frequency: 21},
                {term: 'robbie coltrane', frequency: 21},
                {term: 'rupert grint', frequency: 21},
                {term: 'steve kloves', frequency: 19},
                {term: 'david yates', frequency: 16},
                {term: 'j.k. rowling', frequency: 16},
                {term: 'stephen fry', frequency: 15},
                {term: 'michael gambon', frequency: 14},
                {term: 'jesper christensen (f. 1948)', frequency: 13},
                {term: 'hanna lützen', frequency: 12},
                {term: 'john williams (f. 1932)', frequency: 12},
                {term: 'bill galliford', frequency: 10},
                {term: 'ethan neuburg', frequency: 10},
                {term: 'ralph fiennes', frequency: 10},
                {term: 'tod edmondson', frequency: 10},
                {term: 'helena bonham carter', frequency: 9},
                {term: 'chris columbus', frequency: 8},
                {term: 'richard griffiths', frequency: 8}
              ]
            }
          }
        );
        done();
      });
  });
});
