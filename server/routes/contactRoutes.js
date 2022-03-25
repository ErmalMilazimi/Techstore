import * as ContactsController from "../controllers/contactController.js";
import express from "express";
import auth from "../middleware/auth.js";

const app = express();

// Returns all Contactss
app.get("/", ContactsController.getContacts);

// Add a new Contacts
app.post("/addContacts", auth, ContactsController.addContact);

export default app;
