var express = require('express');
var app = express();
app.get('/', function (req, res, next) {
    res.send('Tour Booking API');
});
app.listen(process.env.PORT || 8091, function () { return console.log('Server runing...'); });
