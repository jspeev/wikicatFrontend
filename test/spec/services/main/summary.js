'use strict';

describe('Service: main/summary', function () {

  // load the service's module
  beforeEach(module('wikicatwkApp'));

  // instantiate service
  var main/summary;
  beforeEach(inject(function (_main/summary_) {
    main/summary = _main/summary_;
  }));

  it('should do something', function () {
    expect(!!main/summary).toBe(true);
  });

});
