const arrays = require("./arrays");

describe("arrays", () => {
  it("adds a number to an array", () => {
    expect(arrays.addToBatch([1], 2)).toStrictEqual([1, 2]);
  });

  it("filters numbers that are too long", () => {
    expect(arrays.checkLength(["1234567890"])).toBe(true);
  });

  it("filters numbers that are too long", () => {
    expect(
      arrays.filterLongNumbers(["1234567890", "12345678901"])
    ).toStrictEqual(["1234567890"]);
  });

  it("makes a personalised message", () => {
    expect(
      arrays.generateMessages([{ name: "Anna", discount: 50 }])
    ).toStrictEqual(["Hello Anna, get your 50% off"]);
  });

  

});
