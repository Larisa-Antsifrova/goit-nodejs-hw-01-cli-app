const contactsMethods = require("./contacts.js");

// Testing the contactsMethods functions
contactsMethods.listContacts();

contactsMethods.getContactById(7);
contactsMethods.getContactById(55);

contactsMethods.removeContact(3);
contactsMethods.removeContact(55);

// contactsMethods.addContact("Junior Developer", "junior@gmail.com", "(063)3896690");
