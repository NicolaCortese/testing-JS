const UserClasses = require("./introClass");

describe("user class", () => {
  const user = new UserClasses.User("Uma");
  it("returns the name", () => {
    expect(user.getName()).toEqual("Uma");
  });
  it("returns the intro", () => {
    expect(user.getIntroduction()).toEqual("Hi, my name is Uma");
  });
});

const users = [
  new UserClasses.User("Uma"),
  new UserClasses.User("Josh"),
  new UserClasses.User("Ollie"),
];

describe("userbase", () => {
  const userBase = new UserClasses.UserBase(users);

  it("returns the count of users", () => {
    expect(userBase.count()).toEqual(3);
  });

  it("returns all users names", () => {
    expect(userBase.getNames()).toEqual(["Uma", "Josh", "Ollie"]);
  });

  it("returns all users intros", () => {
    expect(userBase.getIntroductions()).toEqual([
      "Hi, my name is Uma",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
