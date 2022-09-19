const contactsOperations = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
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

// invokeAction(argv);
