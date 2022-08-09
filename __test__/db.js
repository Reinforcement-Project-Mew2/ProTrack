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
