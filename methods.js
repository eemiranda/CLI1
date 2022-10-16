const fs = require("fs");

const readBill = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./db/bills.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const writeBill = (users) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./db/bills.json", JSON.stringify(users), (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("Ok");
    });
  });
};

module.exports = { readBill, writeBill };
