const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    // TODO check if user already exists
    client.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },
	get: (username, callback) => {
	  
        client.get(username, async (err, jobs) => {
            if (err) throw err;
            if (jobs) {
                res.status(200).send({
                    jobs: JSON.parse(jobs),
                    message: "data retrieved from the cache"
                });
            } else {
                
                res.status(200).send({
                     
                    message: "cache miss"
                });
            }
	  
	  
	  
  //   // TODO create this method
    }
	)
}
}
   