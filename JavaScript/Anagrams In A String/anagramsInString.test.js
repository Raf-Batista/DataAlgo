const anagramsInString = require('./anagramsInString');

test('anagramsInString', () => {
    expect(anagramsInString('acdbacdacb', 'abc')).toEqual([3,7])
})