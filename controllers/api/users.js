const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
    create
  };
  
  // controllers/api/users.js

  async function create(req, res) {
    
    // res.json({
    //   user: {
    //     name: req.body.name,
    //     email: req.body.email
    //   }
    // })
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      // token will be a string
      // res.json(user)
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.json(token);
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
  
  /*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }