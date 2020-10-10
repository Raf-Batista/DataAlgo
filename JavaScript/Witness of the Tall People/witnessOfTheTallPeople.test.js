const witnesses = require('./witnessOfTheTallPeople');

test('witnesses', () => {
    expect(witnesses([3, 6, 3, 4, 1])).toEqual(3)
    expect(witnesses([3, 6, 3, 7, 1])).toEqual(2)
    expect(witnesses([9, 6, 3, 7, 11])).toEqual(1)
    expect(witnesses([9, 6, 3, 7, 2])).toEqual(3)
})