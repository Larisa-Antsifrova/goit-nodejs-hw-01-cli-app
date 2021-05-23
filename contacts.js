// Imports of system modules
const fs = require('fs/promises');
const path = require('path');
// Imports of external libs
const { v4: uuidv4 } = require('uuid');
// Path to contacts file
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Helper function to get the content of a file
async function readFile(path) {
  return await fs.readFile(path, 'utf-8');
}

async function writeFile(path, data) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function listContacts() {
  try {
    const content = await readFile(contactsPath);
    console.table(JSON.parse(content));
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const content = await readFile(contactsPath);
    const requiredContact =
      JSON.parse(content).find(contact => contact.id === contactId) || `No contact with ID${contactId} found.`;
    console.log(requiredContact);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const content = await readFile(contactsPath);
    const contacts = JSON.parse(content);
    const isInContacts = contacts.find(contact => contact.id === contactId);

    if (!isInContacts) {
      throw new Error(`The contact with ID${contactId} does not exist!`);
    }

    const filteredContacts = contacts.filter(contact => contact.id !== contactId);

    await writeFile(contactsPath, filteredContacts);
    console.log(`The contact with ID${contactId} was deleted!`);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const content = await readFile(contactsPath);
    const contacts = [...JSON.parse(content), { id: uuidv4(), name, email, phone }];

    await writeFile(contactsPath, contacts);

    console.log(`The contact was sucсessfully added!`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
