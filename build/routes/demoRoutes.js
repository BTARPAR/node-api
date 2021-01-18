'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _demoController = require('../controllers/demoController');

var routes = function routes(app) {
    app.route('/contact')
    // GET All Contacts
    .get(function (req, res, next) {
        // middleware
        console.log('Request from : ' + req.originalUrl);
        console.log('Request type : ' + req.method);
        next();
    }, _demoController.getContacts)
    // POST : Create new Contact
    .post(_demoController.addNewContact);

    app.route('/contact/:contactID')
    // GET Contact By ID
    .get(_demoController.getContactByID)
    // UPDATE Contact By ID
    .put(_demoController.updateContact)
    // DELETE Contact by ID
    .delete(_demoController.deleteContact);
};

exports.default = routes;