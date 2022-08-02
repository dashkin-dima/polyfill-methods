import { createPromise } from "../../testUtils/createPromise";
import { any } from "./index";

describe("promise any", () => {
  test("resolve first promise", () => {
    const firstResolvePromise = createPromise(1, "first");
    const secondResolvePromise = createPromise(1, "second");
    expect(any([firstResolvePromise, secondResolvePromise])).resolves.toBe(
      "first"
    );
  });

  test("resolve any when reject someone promise", () => {
    const firstResolvePromise = createPromise(1, "first", false);
    const secondResolvePromise = createPromise(1, "second");
    expect(any([firstResolvePromise, secondResolvePromise])).resolves.toBe(
      "first"
    );
  });

  test("reject when reject all promise", () => {
    const firstResolvePromise = createPromise(1, "first", false);
    const secondResolvePromise = createPromise(1, "second", false);
    expect(any([firstResolvePromise, secondResolvePromise])).rejects.toBe([
      "first",
      "second",
    ]);
  });
});
