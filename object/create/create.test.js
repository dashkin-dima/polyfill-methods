import { create } from "./index";

describe("object create", () => {
  test("work without propertiesObject", () => {
    const User = {
      sayHi: function () {
        return `hi, my name is ${this.name}`;
      },
    };

    const user = create(User);
    user.name = "dima";

    expect(user.sayHi()).toEqual("hi, my name is dima");
  });

  test("check propertiesObject", () => {
    const User = {
      sayHi: function () {
        return `hi, my name is ${this.name}`;
      },
    };

    const user = create(User, { name: { value: 'dima' } });

    expect(user.sayHi()).toEqual("hi, my name is dima");
  });
});
