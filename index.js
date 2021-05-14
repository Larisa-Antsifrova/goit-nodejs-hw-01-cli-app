const { Command } = require("commander");
const contactsMethods = require("./contacts.js");

const program = new Command();

program
  .option("-a, --action <type>", "hoose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

console.log("options", argv);

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsMethods.listContacts();
      break;

    case "get":
      contactsMethods.getContactById(id);
      break;

    case "add":
      contactsMethods.addContact(name, email, phone);
      break;

    case "remove":
      contactsMethods.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
