import Datastore from 'nedb';

let db = new Datastore({
  filename: '/workingProxy.db',
});

db.loadDatabase(function(err) {
  console.log(err);
});

export function insertProxyInDatabase(doc) {
  db.find({ proxyAddress: doc.proxyAddress }, function(err, docs) {
    if(docs) {
      console.log('Proxy already exists, no need to insert afresh.');
      return;
    }
  });

  db.insert(doc, function(err, newDoc)) {
    if(err) {
      console.log(err);
    } else {
      console.log(newDoc, 'inserted.');
    }
  };
};