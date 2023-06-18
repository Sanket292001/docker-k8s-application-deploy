const utils = require('./utils');

test('adds 1 + 2 to equal 3', () => {
  expect(utils.sum(1, 2)).toBe(3);
});

// Test - will FAIL
test('subs 1 - 2 to equal 1', () => {
  expect(utils.sub(1, 2)).toBe(1);
});
