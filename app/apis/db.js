import Datastore from 'nedb-promise';

var db = new Datastore({
  filename: 'workingProxy.db',
  inMemoryOnly: false,
});

db.loadDatabase()
  .then(console.log('DB loaded'))
  .catch(err => console.log(err));


async function insertProxyInDatabase(url) {
  const isInDB = await
    db.find({ url: url })
      .then(res => {
        if (res.length > 0) return true;
        return false;
      })
      .catch(err => false);

  if (!isInDB) {
    db.insert({ url: url })
      .then(res => console.log('Inserted successfully.'))
      .catch(err => console.log(err));
  } else {
    console.log('already exists');
  }
};


export default insertProxyInDatabase;