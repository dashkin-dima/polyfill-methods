export const flatten = (array) => {
  const stack = [...array];
  const result = [];

  while(stack.length) {
    const lastElement = stack.pop();
    if(Array.isArray(lastElement)) {
      stack.push(...lastElement);
    } else {
      result.push(lastElement);
    }
  }

  return result.reverse();
}