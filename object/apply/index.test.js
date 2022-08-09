import { apply } from "./index";

describe("object apply", () => {
  test("work without args", () => {
    function sayHi() {
      return `hi, my name is ${this.name}`;
    }

    const user = {
      name: "dima",
    };

    sayHi.myApply = apply;

    expect(sayHi.myApply(user)).toEqual("hi, my name is dima");
  });

  test("check args", () => {
    function sayHi(surname) {
      return `hi, my name is ${this.name} ${surname}`;
    }

    const user = {
      name: "dima",
    };

    sayHi.myApply = apply;

    expect(sayHi.myApply(user, ["dashkin"])).toEqual(
      "hi, my name is dima dashkin"
    );
  });
});
