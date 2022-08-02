const all = (promises) =>
    new Promise((resolve, reject) => {
        let count = 0;
        const result = [];

        const checkDone = () => {
            count += 1;
            if(count === promises.length) {
                resolve(result);
            }
        }

        const collectResult = (index) => (value) => {
            result[index] = value;
        }

        promises.forEach((promise, index) => {
            promise
            .then(collectResult(index))
            .then(checkDone)
            .catch(reject)
        })
    })