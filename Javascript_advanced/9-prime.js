function findPrimesEratosthenes(n) {
    let arrBool = [];
    for (let i = 0; i < 100; i++) {
        arrBool[i] = true;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (arrBool[i] === true) {
            let j = Math.pow(i, 2);
            while (j <= n) {
                arrBool[j] = false;
                j += i;
            }
        }
    }

    const trueIndexes = arrBool
        .map((item, index) => {
            if (index >= 2 && item === true) return index;
            return -1;
        })
        .filter(index => index !== -1);

    // To check the array of prime number
    // console.log(trueIndexes);
    return trueIndexes;
}

function countPrimeNumbers() {
    findPrimesEratosthenes(100);
}

if ('performance' in window) {
    const timeStart = performance.now();
    countPrimeNumbers();
    const timeTaken = performance.now() - timeStart;

    console.log(`Execution time of printing countPrimeNumbers was ${timeTaken} milliseconds.`)
}

/* 
The result
Array(25) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
​0: 2
​1: 3
​2: 5
​3: 7
​4: 11
​5: 13
​6: 17
​7: 19
​8: 23
​9: 29
​10: 31
​11: 37
​12: 41
​13: 43
​14: 47
​15: 53
​16: 59
​17: 61
​18: 67
​19: 71
​20: 73
​21: 79
​22: 83
​23: 89
​24: 97
​length: 25
*/