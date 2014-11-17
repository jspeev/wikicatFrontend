'use strict';

describe('Service: main/server', function () {

  // load the service's module
  beforeEach(module('wikicatwkApp'));

  // instantiate service
  var main/server;
  beforeEach(inject(function (_main/server_) {
    main/server = _main/server_;
  }));

  it('should do something', function () {
    expect(!!main/server).toBe(true);
  });

});
