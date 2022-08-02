export const createPromise = (timeout, responseOrTextError, isReslove = true) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReslove) {
        resolve(responseOrTextError);
      } else {
        reject(responseOrTextError);
      }
    }, timeout);
  });
