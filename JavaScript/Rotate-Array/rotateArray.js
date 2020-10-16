

const rotateLeft = (a, d) => {
    const result = []; 

    for(let i = d; i < a.length; i++) {
        result.push(a[i])
    } 

    for(let i = 0; i < d; i++) {
        result.push(a[i]);
    }

    console.log(result)
    return result;
}