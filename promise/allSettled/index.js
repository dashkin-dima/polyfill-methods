export const allSettled = (promises) => {
  const wrappedPromises = promises.map((promise) =>
    promise
      .then((value) => ({
        status: "fulfilled",
        value,
      }))
      .catch((reason) => ({
        status: "rejected",
        reason,
      }))
  );

  return Promise.all(wrappedPromises);
};
