const assert = require('assert');
const app = require('../../src/app');

describe('\'menuGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('menu-groups');

    assert.ok(service, 'Registered the service');
  });
});
