var models = require('../models');
var path = require('path');
var url = require ('url');
var fs = require ('fs');

var getData = function (req, callback) {
  var reqBody = '';
  // var retMsg;
  req.on('data', function(chunk) {
    reqBody += chunk;
    console.log(chunk);
  });
  req.on('end', function(data) {
    var retMsg = JSON.parse(data); // changed to data, added var b4 retMsg here
    console.log('parsed data returned from getData ', retMsg.body);
    callback(retMsg.body);
  });
};

module.exports = {

  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
    'Content-Type': 'text/html'
  },

  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request.body in messages post: ',req.body);
      exports.getData(req, function(msg) {
        // check if msg is not empty
        if (Object.keys(msg).length) {
          msg.body.createdAt = Date.now();
          // add ID later in DB

          models.exports.messages.post(msg, function(err, results) {
            if (err) {
              res.writeHead(404, exports.headers);
            } else {
              res.writeHead(200, exports.headers);
            }

          });
        } else {
          // if no msg
          res.writeHead(400, exports.headers);
        }
        res.end();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('req.body in users POST', req.body);
      getData(req, function(msg) {
        // check if msg is not empty
        if (Object.keys(msg).length) {

          models.exports.users.post(msg, function(err, results) {
            if (err) {
              res.writeHead(404, exports.headers);
            } else {
              res.writeHead(200, exports.headers);
            }

          });
        } else {
          // if no msg
          res.writeHead(400, exports.headers);
        }
        res.end();
      });
    }
  },

  rooms: {
    get: function (req, res) {},
    post: function (req, res) {
      exports.getData(req, function(msg) {
        // check if msg is not empty
        if (Object.keys(msg).length) {

          models.exports.rooms.post(msg, function(err, results) {
            if (err) {
              res.writeHead(404, exports.headers);
            } else {
              res.writeHead(200, exports.headers);
            }

          });
        } else {
          // if no msg
          res.writeHead(400, exports.headers);
        }
        res.end();
      });
    }
  }
};
