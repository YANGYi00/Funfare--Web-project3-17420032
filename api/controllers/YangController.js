/**
 * YangController
 *
 * @description :: Server-side logic for managing yangs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	buy: function(req,res){
		    var username = req.query.username;
        var cityname = req.query.cityname;
        var personid = req.query.personid;
		    var packagedate = req.query.packagedate;
		    var packageclass = req.query.packageclass;
	    	var yang = {
			              username: username,
                    cityname: cityname,
                    personid: personid,
			packagedate: packagedate,
			packageclass: packageclass,
		            }
		  Yang.create(yang).exec( function(err,model){
			model.save();
			return res.send("Congratulation,Successfully!");
		})
	},






mypackage: function(req, res) {
        Yang.find().exec( function(err, persons) {

        return res.view('user/mypackage', {'persons': persons});
    });
}
};
