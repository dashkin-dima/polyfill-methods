import { bind } from "./index";

describe("object bind", () => {
  test("work without args", () => {
    function sayHi() {
      return `hi, my name is ${this.name}`;
    }
    const user = {
      name: "dima",
    };

    sayHi.myBind = bind;

    const boundSayHi = sayHi.myBind(user);

    expect(boundSayHi()).toEqual("hi, my name is dima");
  });

  test("check args", () => {
    function sayHi(surname) {
      return `hi, my name is ${this.name} ${surname}`;
    }

    const user = {
      name: "dima",
    };

    sayHi.myBind = bind;

    const boundSayHi = sayHi.myBind(user);

    expect(boundSayHi("dashkin")).toEqual("hi, my name is dima dashkin");
  });
});
