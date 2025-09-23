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

    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            countPrimeNumbers();
        }

        const timeTaken = performance.now() - timeStart;
        console.log(`Execution time of calculating prime numbers 100 times was ${timeTaken} milliseconds.`);
    }, 0);
}