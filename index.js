const prompts = require("prompts");
const methods = require("./methods");
const colors = require("colors");

const start = async () => {
  const chosenOption = await prompts({
    type: "select",
    name: "value",
    message: "MIS GASTOS MENSUALES POR CATEGORIA".bgRed,
    choices: [
      {
        title: "REGISTAR",
        description: "registar nuevo gasto",
        value: "input",
      },
      {
        title: "VER",
        description: "ver gastos registrados",
        value: "output",
      },
    ],
    initial: 0,
  });

  if (chosenOption.value == "input") {
    const input = await prompts([
      {
        type: "text",
        name: "Categoria",
        message: "Categoria: ",
      },
      {
        type: "text",
        name: "Monto",
        message: "Monto: ",
      },
    ]);
    const users = await methods.readBill();
    users.push(input);
    await methods.writeBill(users);
    return;
  }
  if (chosenOption.value == "output") {
    const users = await methods.readBill();
    console.log(users);
    return;
  }
};
start();
