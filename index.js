const commander = require("commander");
const contactsMethods = require("./contacts.js");

const program = new commander.Command();

program
  .addOption(new commander.Option("-a, --action <type>", "choose action").choices(["list", "get", "remove", "add"]))
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

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
