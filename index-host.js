'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _demoRoutes = require('./src/routes/demoRoutes');

var _demoRoutes2 = _interopRequireDefault(_demoRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 4000;

// mongoose connection

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI || 'mongodb://localhost/demodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser set up
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

(0, _demoRoutes2.default)(app);

app.get('/', function (req, res) {
    res.send('Node & Express Server running on port ' + PORT);
});

app.listen(PORT, function () {
    console.log('Your Server is UP');
});
