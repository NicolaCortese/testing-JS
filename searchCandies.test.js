const searchCandies = require("./searchCandies");

describe("The searchCandies function", () => {
  it("searches for Ma and less than 2", () => {
    expect(searchCandies.searchCandies("Ma", 2)).toStrictEqual(["Mars"]);
  });

  it("searches for Ma and less than 10", () => {
    expect(searchCandies.searchCandies("Ma", 10)).toStrictEqual([
      "Mars",
      "Maltesers",
    ]);
  });

  it("searches for S and less than 10", () => {
    expect(searchCandies.searchCandies("S", 10)).toStrictEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("searches for S and less than 4", () => {
    expect(searchCandies.searchCandies("S", 4)).toStrictEqual([
      "Skitties",
      "Skittles",
    ]);
  });
});
