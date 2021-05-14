const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  console.log("listContacts");
}

function getContactById(contactId) {
  console.log("getContactById");
}

function removeContact(contactId) {
  console.log("removeContact");
}

function addContact(name, email, phone) {
  console.log("addContact");
}

module.exports = { listContacts, getContactById, removeContact, addContact };
