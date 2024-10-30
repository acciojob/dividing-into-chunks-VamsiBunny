const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let sum = 0;
    let result = [];
    let subArr = [];

    for (let i of arr) {
        if (sum + i <= n) {
            subArr.push(i);
            sum += i; 
        } else {
            if (subArr.length > 0) {
                result.push(subArr);
            }
            subArr = [i];
            sum = i; 
        }
    }

    if (subArr.length > 0) {
        result.push(subArr);
    }

    return result; 
};


const n = promp("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));
