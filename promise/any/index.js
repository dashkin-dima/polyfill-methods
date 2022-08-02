export const any = (promises) =>
  new Promise((resolve, reject) => {
    let countErrors = 0;
    const errors = [];

    const collectErrors = (index) => (error) => {
      errors[index] = error;
      countErrors += 1;
      if (countErrors === promises.length) {
        reject(errors);
      }
    };

    promises.forEach((promise, index) => {
      promise.then(resolve).catch(collectErrors(index));
    });
  });
