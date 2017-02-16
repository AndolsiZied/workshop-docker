(function() {
  'use strict';

  const http        = require('http'),
        port        = 9000,
        MongoClient = require('mongodb').MongoClient,
        assert      = require('assert'),
        configDB    = require('./config/database')();

  MongoClient.connect(configDB, (err, db) => {
    assert.equal(null, err);
    console.log("Connected correctly to database.");
    db.close();
  });

  http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Congrats ! Your demo application is running');
  }).listen(port);

  console.log('Server running at http://127.0.0.1:' + port + '/');
})();
