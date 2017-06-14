var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (msg, callback) {
      //TO DO: reference id_rooms and id_users from the correct tables in order to store them in the messages table.
      var msgsSql = 'INSERT INTO messages (text, timestamp, id_rooms, id_users) VALUE (?, ?, (SELECT id from rooms WHERE name = ? limit 1), (SELECT id from users WHERE name = ? limit 1))';
      var msgParams = [msg.body.message, msg.body.createdAt, msg.body.roomname, msg.body.username];

      db.query(msgsSql, msgParams, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (msg, callback) {
      var usersSql = 'INSERT INTO users (name) VALUES (?)';
      var usersParams = [msg.body.username];
      db.query(usersSql, usersParams, function(err, results) {
        callback(err, results);
      });
    }
  },

  rooms: {
    get: function() {},
    post: function (msg, callback) {
      var roomsSql = 'INSERT INTO rooms (name) VALUES (?)';
      var roomsParams = [msg.body.roomname];
      db.query(roomsSql, roomsParams, function(err, results) {
        callback(err, results);
      });
    }
  }
};

