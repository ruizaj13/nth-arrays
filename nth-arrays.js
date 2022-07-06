//Sort values in n-th amount of arrays without .sort()
const given = [[1, 5, 10], [2, 4, 6]];

const sortArrays = (givenArray) => {
    const result = [];
    
    givenArray.forEach( array => {
        array.forEach( (num, idx) => {
            result.push(num);
        });
    });
    
    

    return result;
};

console.log(sortArrays(given));