const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const content = await fs.readFile(contactsPath, "utf-8");
    console.table(JSON.parse(content));
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const content = await fs.readFile(contactsPath, "utf-8");
    const requiredContact =
      JSON.parse(content).find((contact) => contact.id === contactId) || `No contact with ID${contactId} found.`;
    console.log(requiredContact);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const content = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(content);
    const isInContacts = contacts.find((contact) => contact.id === contactId);

    if (!isInContacts) {
      throw new Error(`The contact with ID${contactId} does not exist!`);
    }

    const filteredContacts = contacts.filter((contact) => contact.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
    console.log(`The contact with ID${contactId} was deleted!`);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const content = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(content);

    contacts.push({ id: uuidv4(), name, email, phone });

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    console.log(`The contact was sucсessfully added!`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
