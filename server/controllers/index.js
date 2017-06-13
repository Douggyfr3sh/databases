var models = require('../models');
var path = require('path');
var url = require ('url');
var fs = require ('fs');


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
      // var getPath = url.parse(req.url).pathname;

      // if (getPath === '/') {
      //   getPath = '../../client/hrr-24-chatterbox-client/client/index.html';
      //   fs.readFile(getPath, 'utf8', (err, data) => {
      //     if (err) {
      //       res.writeHead(404, exports.headers);
      //       res.end('404: not found');
      //     } else {
      //       res.writeHead(200, exports.headers);
      //       res.end(data);
      //     }
      //   });
      // }
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

