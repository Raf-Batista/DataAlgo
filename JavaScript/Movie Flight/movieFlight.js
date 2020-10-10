
function flight(flightLength, movieLengths) {
    let result = {};
    for(let i = 0; i < movieLengths.length; i++) {
        let diff = flightLength - movieLengths[i]
        if(result[movieLengths[i]]) {
             return true;   
        }
        result[diff] = true;  
    } 

    return false;
}
