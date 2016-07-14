/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: work {"pids":["870970-basis:28448716"],"fields":["title","dcTitle","coverUrlFull","collection"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"775100","librarytype":"folkebibliotek","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"moreinfo\",{\"qs\":{\"action\":\"moreInfo\",\"authenticationUser\":\"XXXXX\",\"authenticationGroup\":\"XXXXX\",\"authenticationPassword\":\"XXXXX\",\"pidList\":\"870970-basis:28448716\",\"outputType\":\"json\"}}]":"{\"moreInfoResponse\":{\"requestStatus\":{\"statusEnum\":{\"$\":\"ok\",\"@\":\"mi\"},\"errorText\":{\"$\":\"\",\"@\":\"mi\"},\"@\":\"mi\"},\"identifierInformation\":[{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"870970-basis:28448716\",\"@\":\"mi\"},\"@\":\"mi\"},\"backImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=8065016731fc69babeb1\",\"@imageSize\":{\"$\":\"detail_117\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=b003f836d26124a22d28\",\"@imageSize\":{\"$\":\"detail_207\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=72102d913e9c7aefd1bc\",\"@imageSize\":{\"$\":\"detail_42\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=c072256700c514168e98\",\"@imageSize\":{\"$\":\"detail_500\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=b569933d2802175dbaa7\",\"@imageSize\":{\"$\":\"thumbnail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=6e7b43d7774cf915fea0\",\"@imageSize\":{\"$\":\"detail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"}],\"backPage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=1c1aaa6b9be906af3601\",\"@\":\"mi\"}],\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2\",\"@imageSize\":{\"$\":\"detail_117\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845\",\"@imageSize\":{\"$\":\"detail_207\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f\",\"@imageSize\":{\"$\":\"detail_42\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345\",\"@imageSize\":{\"$\":\"detail_500\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1\",\"@imageSize\":{\"$\":\"thumbnail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4\",\"@imageSize\":{\"$\":\"detail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"}],\"@\":\"mi\"}],\"@\":\"mi\"},\"@namespaces\":{\"mi\":\"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo\"}}\n","[\"opensearch\",{\"qs\":{\"action\":\"getObject\",\"identifier\":[\"870970-basis:28448716\"],\"agency\":\"775100\",\"profile\":\"opac\",\"outputType\":\"json\",\"objectFormat\":[\"briefDisplay\",\"dkabm\"]}}]":"{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"28448716|870970\",\"@\":\"ac\"},{\"$\":\"9788758808994\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kadavermarch\",\"@\":\"dc\"},{\"$\":\"Kadavermarch\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Dennis J\\u00fcrgensen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"J\\u00fcrgensen, Dennis\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 13 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 14 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 15 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 16 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"splatter\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"zombier\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\\"Isslottet\\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"3. udgave\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Tellerup.dk\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2010\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"379 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:28448716\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:28448716\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2010-09-28\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:28448716\"},{\"$\":\"870970-basis:28448716\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:28448716\"},\"identifier\":{\"$\":\"870970-basis:28448716\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":{\"$\":\"\"},\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"6\"},\"fedoraRecordsRead\":{\"$\":\"0\"},\"time\":{\"$\":\"0.057851\"},\"trackingId\":{\"$\":\"2016-05-31T13:07:45:649050:28316\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}","[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]":"{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"6\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"28448716|870970\",\"@\":\"ac\"},{\"$\":\"9788758808994\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kadavermarch\",\"@\":\"dc\"},{\"$\":\"Kadavermarch\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Dennis J\\u00fcrgensen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"J\\u00fcrgensen, Dennis\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 13-16 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"splatter\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"zombier\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\\"Isslottet\\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"3. udgave, 1. oplag (2010)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Tellerup.dk\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2010\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"379 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:28448716\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:28448716\"},{\"$\":\"870970-basis:28448716\"}]}},{\"identifier\":{\"$\":\"775100-katalog:24340627\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:07286406\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29302049\"},\"creationDate\":{\"$\":\"2012-04-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:24793591\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:27502563\"},\"creationDate\":{\"$\":\"2008-11-11\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"820010-katalog:3808141\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"820010-katalog:2503079\"},\"identifier\":{\"$\":\"775100-katalog:24340627\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"830370-katalog:07286406\"},\"identifier\":{\"$\":\"775100-katalog:07286406\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:29302049\"},\"identifier\":{\"$\":\"870970-basis:29302049\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Ebog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:24793591\"},\"identifier\":{\"$\":\"775100-katalog:24793591\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Lydbog (cd)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Helle Sihm\"},\"fedoraPid\":{\"$\":\"874310-katalog:DBB0017385\"},\"identifier\":{\"$\":\"870970-basis:27502563\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Lydbog (net)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"14\"},\"fedoraRecordsRead\":{\"$\":\"24\"},\"time\":{\"$\":\"0.443811\"},\"trackingId\":{\"$\":\"2016-05-31T13:07:45:649294:9750\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"};

describe('Automated test: work-single_pid-title_dcTitle_coverUrlFull_collection', () => {
  it('expected response. ID:8krgai, for {"pids":["870970-basis:28448716"],"fields":["title","dcTitle","coverUrlFull","collection"]}', (done) => {
    context.mockData = mockData;
    provider.execute('work', {"pids":["870970-basis:28448716"],"fields":["title","dcTitle","coverUrlFull","collection"]}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"coverUrl117":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2"],"coverUrl207":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845"],"coverUrl42":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f"],"coverUrl500":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345"],"coverUrlThumbnail":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1"],"coverUrlFull":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4"],"acIdentifier":["28448716|870970"],"identifierISBN":["9788758808994"],"acSource":["Bibliotekskatalog"],"dcTitle":["Kadavermarch"],"dcTitleFull":["Kadavermarch"],"creatorAut":["Dennis Jürgensen"],"creatorSort":["Jürgensen, Dennis"],"subjectDK5Text":["Skønlitteratur"],"subjectDBCN":["for 13 år","for 14 år","for 15 år","for 16 år"],"subjectDBCS":["gys","splatter","zombier"],"subjectGenre":["gys"],"subjectDK5":["sk"],"abstract":["Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på \"Isslottet\" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse"],"audience":["børnematerialer"],"version":["3. udgave"],"publisher":["Tellerup.dk"],"date":["2010"],"typeBibDKType":["Bog"],"extent":["379 sider"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"accessType":["physical"],"creator":["Dennis Jürgensen"],"fedoraPid":["870970-basis:28448716"],"pid":["870970-basis:28448716"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"],"collection":["775100-katalog:28448716","775100-katalog:24340627","775100-katalog:07286406","870970-basis:29302049","775100-katalog:24793591","870970-basis:27502563"],"collectionDetails":[{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:28448716"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:24340627"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:07286406"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["online"],"creator":["Dennis Jürgensen"],"pid":["870970-basis:29302049"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Ebog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:24793591"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Lydbog (cd)"],"workType":["audiobook"]},{"accessType":["online"],"creator":["Helle Sihm"],"pid":["870970-basis:27502563"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Lydbog (net)"],"workType":["audiobook"]}]}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"coverUrl117":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0dc62cd6f8907f4866f2"],"coverUrl207":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0a5ee9ad0bba76426845"],"coverUrl42":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3c8e295a5a79d32f7f6f"],"coverUrl500":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e5b08d3ca3009fbd4345"],"coverUrlThumbnail":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=bd8fe5a23ffb05b6f9c1"],"coverUrlFull":["//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c4ddad224fdc6b9571a4"],"acIdentifier":["28448716|870970"],"identifierISBN":["9788758808994"],"acSource":["Bibliotekskatalog"],"dcTitle":["Kadavermarch"],"dcTitleFull":["Kadavermarch"],"creatorAut":["Dennis Jürgensen"],"creatorSort":["Jürgensen, Dennis"],"subjectDK5Text":["Skønlitteratur"],"subjectDBCN":["for 13 år","for 14 år","for 15 år","for 16 år"],"subjectDBCS":["gys","splatter","zombier"],"subjectGenre":["gys"],"subjectDK5":["sk"],"abstract":["Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på \"Isslottet\" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse"],"audience":["børnematerialer"],"version":["3. udgave"],"publisher":["Tellerup.dk"],"date":["2010"],"typeBibDKType":["Bog"],"extent":["379 sider"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"accessType":["physical"],"creator":["Dennis Jürgensen"],"fedoraPid":["870970-basis:28448716"],"pid":["870970-basis:28448716"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"],"collection":["775100-katalog:28448716","775100-katalog:24340627","775100-katalog:07286406","870970-basis:29302049","775100-katalog:24793591","870970-basis:27502563"],"collectionDetails":[{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:28448716"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:24340627"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:07286406"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Bog"],"workType":["book"]},{"accessType":["online"],"creator":["Dennis Jürgensen"],"pid":["870970-basis:29302049"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Ebog"],"workType":["book"]},{"accessType":["physical"],"creator":["Dennis Jürgensen"],"pid":["775100-katalog:24793591"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Lydbog (cd)"],"workType":["audiobook"]},{"accessType":["online"],"creator":["Helle Sihm"],"pid":["870970-basis:27502563"],"language":["Dansk"],"title":["Kadavermarch"],"titleFull":["Kadavermarch"],"type":["Lydbog (net)"],"workType":["audiobook"]}]}]});
        done();
      });
  });
});
