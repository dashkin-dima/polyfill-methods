import { createPromise } from "../../testUtils/createPromise";
import { all } from "./index";

describe("promise all", () => {
  test("resolve promises", () => {
    const firstResolvePromise = createPromise(1, "first");
    const secondResolvePromise = createPromise(2, "second");
    expect(all([firstResolvePromise, secondResolvePromise])).resolves.toEqual([
      "first",
      "second",
    ]);
  });

  test("resolve promises in the correct order", () => {
    const firstResolvePromise = createPromise(2, "first");
    const secondResolvePromise = createPromise(1, "second");
    expect(all([firstResolvePromise, secondResolvePromise])).resolves.toEqual([
      "first",
      "second",
    ]);
  });

  test("reject when reject any promise", () => {
    const firstResolvePromise = createPromise(2, "first");
    const secondResolvePromise = createPromise(1, "second", false);
    expect(all([firstResolvePromise, secondResolvePromise])).rejects.toBe(
      "second"
    );
  });
});
