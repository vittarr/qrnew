const assert = require('assert');
const app = require('../../src/app');

describe('\'orderItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-items');

    assert.ok(service, 'Registered the service');
  });
});
