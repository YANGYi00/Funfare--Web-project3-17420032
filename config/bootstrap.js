/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var person = {"region": "East Asia", "city":"Qsaka", "class":"Business","price": "$8800",
   "imageUrl":"/image/a.jpg", "dataValidTill":"10/29/2017","overallQuota":"10","travelDates":"10/10/2017-10/31/2017"};
 Person.create(person).exec( function(err, model) {});

 person = {"region": "East Asia", "city":"Seoul", "class":"Business","price": "$7800",
   "imageUrl":"/image/b.jpg", "dataValidTill":"10/29/2017","overallQuota":"13","travelDates":"10/10/2017-10/31/2017"};
Person.create(person).exec( function(err, model) {});


person = {"region": "South-east Asia", "city":"Cebu", "class":"Economy","price": "$4800",
   "imageUrl":"/image/c.jpg", "dataValidTill":"10/29/2017","overallQuota":"9","travelDates":"10/09/2017-10/31/2017"};
Person.create(person).exec( function(err, model) {});

person = {"region": "South-east Asia", "city":"Singapore", "class":"Business","price": "$6800",
   "imageUrl":"/image/d.jpg", "dataValidTill":"10/29/2017","overallQuota":"10","travelDates":"10/08/2017-10/31/2017"};
Person.create(person).exec( function(err, model) {});

person = {"region": "Americas", "city":"Los Aageles", "class":"Business","price": "$9800",
   "imageUrl":"/image/e.jpg", "dataValidTill":"10/29/2017","overallQuota":"13","travelDates":"10/04/2017-10/31/2017"};
Person.create(person).exec( function(err, model) {});

person = {"region": "Americas", "city":"Boston", "class":"Economy","price": "$4800",
   "imageUrl":"/image/f.jpg", "dataValidTill":"10/29/2017","overallQuota":"34","travelDates":"10/01/2017-10/31/2017"};
Person.create(person).exec( function(err, model) {});

var user = {"username": "admin", "password":"123456", "id":1}

    User.create(user).exec( function (err, model)  {
        
    });

    user = {"username": "customer", "password":"123456", "id":2}

    User.create(user).exec( function (err, model)  {
     
    });
    
  cb();
};
