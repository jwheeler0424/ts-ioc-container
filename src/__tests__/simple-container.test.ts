import { describe, test, expect } from '@jest/globals';

describe('Simple container', function () {
  test('Returns correct value', () => {
    expect(2 + 3).toEqual(5);
  });
  // should resolve instance from instance registration
  // should resolve instance from factory registration
  // should resolve instance from constructor registration
  // should resolve a singleton from instance registration
  // should resolve a singleton from factory registration
  // should resolve a singleton from constructor registration
  // should resolve from parent container
  // should throw error when attempting to resolving unregistered
  // should not resolve from parent containers own registrations
  // should override parent container registration
  // should resolve dependencies recursively
});
