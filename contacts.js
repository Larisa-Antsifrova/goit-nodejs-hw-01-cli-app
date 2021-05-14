const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then((contacts) => console.table(JSON.parse(contacts)))
    .catch((error) => console.log(error.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((contacts) => {
      const requiredContact =
        JSON.parse(contacts).find((contact) => contact.id === contactId) || "No contact with this ID found.";
      console.log(requiredContact);
    })
    .catch((error) => console.log(error.message));
}

function removeContact(contactId) {
  console.log("removeContact");
}

function addContact(name, email, phone) {
  console.log("addContact");
}

module.exports = { listContacts, getContactById, removeContact, addContact };
