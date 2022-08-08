import { flatten } from "./index";

describe("array flatten", () => {
  test("test 1", () => {
    const received = [[1, [2, [3, [4]]]]];
    const expected = [1, 2, 3, 4];
    expect(flatten(received)).toEqual(expected);
  });

  test("test 2", () => {
    const received = [[[[1],2],3],4];
    const expected = [1, 2, 3, 4];
    expect(flatten(received)).toEqual(expected);
  });

  test("reject when reject any promise", () => {
    const received = [1, [2, [3]], 4];
    const expected = [1, 2, 3, 4];
    expect(flatten(received)).toEqual(expected);
  });
});
