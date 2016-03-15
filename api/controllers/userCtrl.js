
var User   = require('../models/users.js')

function createUser (req, res){

	var newUser = new User({
		firstname : req.body.firstname,
		lastname : req.body.lastname,
	})

	newUser.save(function(err, doc){
		res.send(doc)
	})

}

module.exports = {
	createUser : createUser
}

