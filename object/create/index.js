export const create = (proto, propertiesObject) => {
  const object = {};
  object.__proto__ = proto;

  if (propertiesObject) {
    Object.defineProperties(object, propertiesObject);
  }

  return object;
};
