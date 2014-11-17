'use strict';

describe('Directive: main/summary', function () {

  // load the directive's module
  beforeEach(module('wikicatwkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main/summary></main/summary>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the main/summary directive');
  }));
});
