const compression = require('./stringCompression');

test('string compression', () => {
    expect(compression(['a', 'a', 'b', 'c', 'c', 'c'])).toStrictEqual(['a', '2', 'b', 'c', '3'])
})