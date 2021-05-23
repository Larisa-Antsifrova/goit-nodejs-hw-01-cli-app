# goit-nodejs-hw-01-cli-app

Description:

- CLI Application to Handle Contacts.

Tools:

- Node.js
- commander

## Examples:

### Getting and outputting the whole list of contacts via console.table

node index.js --action list

![Task](./results/hw-01-1.JPG)

### Getting a contact by id

node index.js --action get --id 5

![Task](./results/hw-01-2.JPG)

### Adding a contact

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

![Task](./results/hw-01-3.JPG)

### Deleting a contact

node index.js --action remove --id=3

![Task](./results/hw-01-4.JPG)
