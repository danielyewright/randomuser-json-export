(function() {
  'use strict'

  var rp = require('request-promise')
  var Promise = require('bluebird')
  var jsonfile = require('jsonfile')
  var fs = require('fs');

  var options = {
    method: 'GET',
    uri: 'https://randomuser.me/api/?nat=us&results=20',
    headers: {
      /* 'content-type': 'application/json' */ // Set automatically 
    },
    json: true
  }

  rp(options)
    .then(function(response) {
      Promise.map(response.results, function(results) {
        var results = []
      }).then(function() {
        var users = []

        for (var i = 0; i < response.results.length; i++) {
          if (response.results[i].user.length == 0) {
            continue
          }
          
          users.push({
            first_name: response.results[i].user.name.first,
            last_name: response.results[i].user.name.last,
            address: response.results[i].user.location,
            email_address: response.results[i].user.email,
            phone_number: response.results[i].user.phone,
            id: response.results[i].user.registered
          })
        }

        // write to JSON file
        var file = 'data.json'
         
        jsonfile.writeFile(file, users, {spaces: 2}, function (err) {
          if (err)
            console.error(err)
        })
        
        console.log("Wrote to JSON file successfully");
      })
    })
    .catch(function(err) {
        // Delete failed...
        console.error(err)
    })
})();