export function bind(context) {
  context.functionRef = this;
  return function (...args) {
    if (args && args.length) {
      return context.functionRef(...args);
    } else {
      return context.functionRef();
    }
  };
}
