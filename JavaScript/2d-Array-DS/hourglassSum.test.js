const hourglassSum = require('./hourglassSum');

const hourglass = [[1,1,1,0,0,0], [0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0], [0,0,0,2,0,0], [0,0,1,2,4,0]]

test('it returns max sum hourglass', () => {
    expect(hourglassSum(hourglass)).toEqual(19)
})


