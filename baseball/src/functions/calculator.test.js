import { add } from "./calculator";

describe("calculator.js", () => {
  describe("add()", () => {
    it("should return the sum of numbers passed in", () => {
      //expect
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
    });
  });
});
