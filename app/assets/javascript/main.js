// ES6 or Vanilla JavaScript
// ES6 or Vanilla JavaScript
window.onload = window.onunload = function analytics(event) {
    if (!navigator.sendBeacon) return;
  
    var url = "/tracking";
    // Create the data to send
    var data = "state=" + event.type + "&location=" + location.href + "&time=" + Date();
  
    // Send the beacon
    var status = navigator.sendBeacon(url, JSON.stringify({state: event.type, location: location.href, time: Date()}));
  
    // Log the data and result
    console.log("sendBeacon: URL = ", url, "; data = ", data, "; status = ", status);
  };

const databaseWrite = () => {
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
        console.log('here ..............................................')
        if (err) throw err;
        db.collection('Persons', function (err, collection) {
            if (err) throw err;
            collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
            collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
            collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
            db.collection('Persons').count(function (err, count) {
                if (err) throw err;
                
                console.log('Total Rows: ' + count);
            });
        });

        //Write databse Insert/Update/Query code here..
                    
    });
}
