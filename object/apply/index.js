export function apply(context, args) {
  context.functionRef = this;
  if (args && args.length) {
    return context.functionRef(...args);
  } else {
    return context.functionRef();
  }
}
