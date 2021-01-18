'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContactSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ContactSchema = exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter First Name'
    },
    lastName: {
        type: String,
        required: 'Enter Last Name'
    },
    email: {
        type: String
    },
    phone_number: {
        type: Number
    },
    company: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});