const contactsOperations = require("./contacts");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const { program } = require("commander");
// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contat with ID ${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// const newContact = {
//   name: "voha",
//   email: "voha@sfsfsf",
//   phone: "+349348534576",
// };
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "8" });

// invokeAction({
//   action: "add",
//   name: "voha",
//   email: "voha@mail.com",
//   phone: "+349348534576",
// });

// invokeAction({ action: "remove", id: "10" });

// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);
// console.log(argv);

// invokeAction(argv);

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
