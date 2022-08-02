const create = (proto, propertiesObject) => {
  const object = {};
  object.__proto__ = proto;

  Object.defineProperties(object, propertiesObject);
  return object;
};
