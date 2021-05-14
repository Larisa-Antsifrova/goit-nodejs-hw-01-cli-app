const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

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
        JSON.parse(contacts).find((contact) => contact.id === contactId) || `No contact with ID${contactId} found.`;
      console.log(requiredContact);
    })
    .catch((error) => console.log(error.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((contacts) => {
      const parsedContacts = JSON.parse(contacts);
      const isInContacts = parsedContacts.find((contact) => contact.id === contactId);

      if (!isInContacts) {
        throw new Error(`The contact with ID${contactId} does not exist!`);
      }

      const filteredContacts = parsedContacts.filter((contact) => contact.id !== contactId);

      fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2)).then(() =>
        console.log(`The contact with ID${contactId} was deleted!`)
      );
    })
    .catch((error) => console.log(error.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8")
    .then((contacts) => {
      const parsedContacts = JSON.parse(contacts);
      parsedContacts.push({ id: uuidv4(), name, email, phone });

      fs.writeFile(contactsPath, JSON.stringify(parsedContacts, null, 2)).then(() =>
        console.log(`The contact was sucessfully added!`)
      );
    })
    .catch((error) => console.log(error.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
