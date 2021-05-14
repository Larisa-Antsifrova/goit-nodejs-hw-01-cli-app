const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then(console.table)
    .catch((error) => console.log(error.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then((contacts) => {
      return contacts.find((contact) => contact.id === contactId) || `No contact with ID${contactId} found.`;
    })
    .then(console.log)
    .catch((error) => console.log(error.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then((contacts) => {
      const isInContacts = contacts.find((contact) => contact.id === contactId);

      if (!isInContacts) {
        throw new Error(`The contact with ID${contactId} does not exist!`);
      }

      const filteredContacts = contacts.filter((contact) => contact.id !== contactId);

      fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2)).then(() =>
        console.log(`The contact with ID${contactId} was deleted!`)
      );
    })
    .catch((error) => console.log(error.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then((contacts) => {
      contacts.push({ id: uuidv4(), name, email, phone });

      fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2)).then(() =>
        console.log(`The contact was sucсessfully added!`)
      );
    })
    .catch((error) => console.log(error.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
