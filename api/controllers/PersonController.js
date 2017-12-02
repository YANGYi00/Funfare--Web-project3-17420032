/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
    if (req.method == "POST") {
        Person.create(req.body.Person).exec( function(err, model) {
            console.log(req.body);
            model.region = req.body.region;
            model.city = req.body.city;
            model.class = req.body.class;
            model.price = req.body.price;
            model.imageUrl = req.body.imageUrl;
            model.overallQuota = req.body.overallQuota;
            model.dataValidTill = req.body.dataValidTill;
            model.travelDates = req.body.travelDates;
            model.save()
            return res.send("Successfully Created!");
        });
    } else {
        return res.view('create');
    }
},
// json function
json: function(req, res) {
    Person.find().exec( function(err, persons) {
        return res.json(persons);
    });
},
// index function
index: function(req, res) {
    Person.find().paginate({page: 1, limit: 6}).exec( function(err, persons) {
        return res.view('index', {'persons': persons});
    });
},
view: function (req, res) {
    Person.findOne(req.params.id).exec( function(err, model) {
        console.log("......."+req.params.id)
        if (model != null)
            return res.view('person/view', {'person': model});
        else
            return res.send("No such person");
    }); 
},	
admin: function(req, res) {
    Person.find().exec( function(err, persons) {
        return res.view('admin', {'persons': persons});
    });
},
// delete function
delete: function(req, res) {
   Person.findOne(req.params.id).exec( function(err, model) {
        if (model != null)            model.destroy();
            return res.send("Place Deleted");
             });
},
// update function
update: function(req, res) {
    if (req.method == "GET") {
        Person.findOne(req.params.id).exec( function(err, model) {
            if (model == null)
                return res.send("No such Place!");
            else
                return res.view('update', {'person': model});
        });
    } else {
        Person.findOne(req.params.id).exec( function(err, model) {
            return res.send("Record updated");
        }); 
    }
},

cusbuy: function(req, res){
    var city = req.query.city;
    console.log("from cusbuy:" + city);
    var sql = { 
        cityname: city 
    };
    Yang.find(sql).exec( function(err, yang){
        console.log(yang);
        return res.view('person/cusbuy',{"yang": yang});
    })
},

// search function
search: function (req, res) {
    Person.find()
        .paginate({page: 1, limit: 2})
        .exec( function (err, persons) {
            return res.view('search', {'persons': persons});
        })
},// paginate function
};

