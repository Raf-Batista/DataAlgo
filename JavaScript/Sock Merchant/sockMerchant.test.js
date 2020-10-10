const sockMerchant = require('./sockMerchant') 


test('returns correct number of pairs', () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3)
}) 
   
