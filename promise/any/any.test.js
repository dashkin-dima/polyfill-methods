import { createPromise } from "../../testUtils/createPromise";
import { any } from "./index";

describe("promise any", () => {
  test("resolve first promise", () => {
    const firstResolvePromise = createPromise(1, "first");
    const secondResolvePromise = createPromise(2, "second");
    expect(any([firstResolvePromise, secondResolvePromise])).resolves.toBe(
      "first"
    );
  });

  test("resolve any when reject someone promise", () => {
    const firstRejectPromise = createPromise(1, "first", false);
    const secondResolvePromise = createPromise(2, "second");
    expect(any([firstRejectPromise, secondResolvePromise])).resolves.toBe(
      "second"
    );
  });

  test("reject when reject all promise", () => {
    const firstRejectPromise = createPromise(1, "first", false);
    const secondRejectPromise = createPromise(1, "second", false);
    expect(any([firstRejectPromise, secondRejectPromise])).rejects.toEqual([
      "first",
      "second",
    ]);
  });
});
