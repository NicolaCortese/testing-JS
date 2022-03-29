const add = require("./add");

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add(2, 2)).toBe(4);
  });
  it("adds 2 and 4", () => {
    expect(add(2, 4)).toBe(6);
  });
});
