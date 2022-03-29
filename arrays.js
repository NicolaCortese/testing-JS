const addToBatch = (orderArray, orderID) => {
  if (orderArray.length >= 5) {
    return orderArray;
  }
  return orderArray.concat(orderID);
};

const checkLength = (phone) => {
  return phone.length <= 10;
};

const filterLongNumbers = (arrayPhone) => {
  return arrayPhone.filter(checkLength);
};

const generateMessages = (people) => {
  const personalisedMessages = people.map((person) => {
    return `Hello ${person.name}, get your ${person.discount}% off`;
  });
  return personalisedMessages;
};

const phoneNumbers = ["1234567890", "1234567891", "123456789112342"];
const names = ["Paul", "Nico", "George"];
const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 6 },
];

module.exports = {
  addToBatch,
  checkLength,
  filterLongNumbers,
  generateMessages,
};
