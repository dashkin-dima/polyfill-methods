import { call } from "./index";

describe("object call", () => {
  test("work without args", () => {
    function sayHi() {
      return `hi, my name is ${this.name}`;
    }

    const user = {
      name: "dima",
    };

    sayHi.myCall = call;

    expect(sayHi.myCall(user)).toEqual("hi, my name is dima");
  });

  test("check args", () => {
    function sayHi(surname) {
      return `hi, my name is ${this.name} ${surname}`;
    }

    const user = {
      name: "dima",
    };

    sayHi.myCall = call;

    expect(sayHi.myCall(user, "dashkin")).toEqual(
      "hi, my name is dima dashkin"
    );
  });
});
