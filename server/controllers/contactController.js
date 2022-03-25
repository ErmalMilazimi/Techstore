import Contact from "../modules/Contact.js";

// Get all Contacts
export let getContacts = (req, res) => {
  Contact.find((err, Contacts) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(Contacts);
    }
  });
};

// Add a new Contact
export let addContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, Contact) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(Contact);
    }
  });
};
