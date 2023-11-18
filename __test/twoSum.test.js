const twoSum = require("./../src/twoSum");

describe("twoSum", () => {
  test("returns the correct indices for the given input", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });
});
