const fs = require('fs');
const path = require('path');
const userController = require('../server/controllers/userControllers')

const testJsonFile = path.resolve(__dirname, '../server/data/fakeUser.json');

describe('db unit tests', () => {
  beforeAll((done) => {
    fs.writeFile(testJsonFile.JSON.stringify([]), () => {
      db.reset();
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  });

  describe('#sync', () => {
    it('test description', () => { 
    });
  });
});



/**
 ** Authentication Controller
 *  1) If the cookie is properly created through 'setCookie' when the user access
 *    '/' route (Check cookie name & value).
 *    (Manual Checking: Chrome Dev Tool -> "Application" tab)
 * 
 *  2) 
 * 
 */