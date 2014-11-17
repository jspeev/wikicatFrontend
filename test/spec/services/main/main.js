'use strict';

describe('Service: main/main', function () {

  // load the service's module
  beforeEach(module('wikicatwkApp'));

  // instantiate service
  var main/main;
  beforeEach(inject(function (_main/main_) {
    main/main = _main/main_;
  }));

  it('should do something', function () {
    expect(!!main/main).toBe(true);
  });

});
