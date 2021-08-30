const assert = require('assert');
const app = require('../../src/app');

describe('\'reviewitems\' service', () => {
  it('registered the service', () => {
    const service = app.service('reviewitems');

    assert.ok(service, 'Registered the service');
  });
});
