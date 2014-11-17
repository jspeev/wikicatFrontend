'use strict';

describe('Directive: main/floatcat', function () {

  // load the directive's module
  beforeEach(module('wikicatwkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main/floatcat></main/floatcat>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the main/floatcat directive');
  }));
});
