var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Hello Dipak', function(done) {
    request(app).get('/').expect('Hello Dipak', done);
  });
});
