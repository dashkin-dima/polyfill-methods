import { createPromise } from "../../testUtils/createPromise";
import { race } from "./index";

describe("promise race", () => {
  test("resolve fastest promise", () => {
    const firstResolvePromise = createPromise(1, "first");
    const secondResolvePromise = createPromise(2, "second");
    expect(race([firstResolvePromise, secondResolvePromise])).resolves.toBe(
      "first"
    );
  });
});
