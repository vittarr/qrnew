const assert = require('assert');
const app = require('../../src/app');

describe('\'reviewItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('review-items');

    assert.ok(service, 'Registered the service');
  });
});
