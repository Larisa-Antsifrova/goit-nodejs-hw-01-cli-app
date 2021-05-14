# goit-nodejs-hw-01-cli-app

Description:

- CLI Application to Handle Contacts.

 Tools:

- Node.js
- commander

## Examples:

### Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

![Task](./results/hw-01-1.JPG)

### Получаем контакт по id

node index.js --action get --id 5

![Task](./results/hw-01-2.JPG)

### Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

![Task](./results/hw-01-3.JPG)

### Удаляем контакт

node index.js --action remove --id=3

![Task](./results/hw-01-4.JPG)
