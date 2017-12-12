var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    //check if email exists
    // save the user to the DB
    db.saveUser({email, password});
    //send welcome email
};
