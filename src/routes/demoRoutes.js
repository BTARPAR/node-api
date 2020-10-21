import {
    addNewContact,
    getContacts,
    getContactByID,
    updateContact,
    deleteContact
} from '../controllers/demoController'

const routes = (app) => {
    app.route('/contact')
        // GET All Contacts
        .get((req, res, next) => {
            // middleware
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request type : ${req.method}`)
            next()
        }, getContacts)
        // POST : Create new Contact
        .post(addNewContact)

    app.route('/contact/:contactID')
        // GET Contact By ID
        .get(getContactByID)
        // UPDATE Contact By ID
        .put(updateContact)
        // DELETE Contact by ID
        .delete(deleteContact)
}

export default routes