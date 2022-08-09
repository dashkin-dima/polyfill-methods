export function call(context, ...args) {
  context.functionRef = this;
  return context.functionRef(...args)
}


