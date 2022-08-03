import { createPromise } from "../../testUtils/createPromise";
import { allSettled } from "./index";

describe("promise allSettled", () => {
  test("resolve promises", () => {
    const firstResolvePromise = createPromise(1, "first");
    const secondResolvePromise = createPromise(2, "second");
    expect(
      allSettled([firstResolvePromise, secondResolvePromise])
    ).resolves.toEqual([
      { value: "first", status: "fulfilled" },
      { value: "second", status: "fulfilled" },
    ]);
  });

  test("resolve promises in the correct order", () => {
    const firstResolvePromise = createPromise(2, "first");
    const secondResolvePromise = createPromise(1, "second");
    expect(
      allSettled([firstResolvePromise, secondResolvePromise])
    ).resolves.toEqual([
      { value: "first", status: "fulfilled" },
      { value: "second", status: "fulfilled" },
    ]);
  });

  test("resolve when reject any promise", () => {
    const firstResolvePromise = createPromise(2, "first");
    const secondRejectPromise = createPromise(1, "second", false);
    expect(
      allSettled([firstResolvePromise, secondRejectPromise])
    ).resolves.toEqual([
      { value: "first", status: "fulfilled" },
      { reason: "second", status: "rejected" },
    ]);
  });
});
