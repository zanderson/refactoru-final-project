// Requires 
var express = require('express');
var app = express();
/** Express Session Setup **/
var session = require('express-session');
app.sessionMiddleware = session({
  secret: 'yooo',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)

/** End Express Session Setup **/

var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var passport = require('passport')
// Create Express App Object \\


mongoose.connect('mongodb://localhost/FarmApp')

var productCtrl = require('./api/controllers/productCtrl.js')

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
var User = mongoose.model('user', userSchema);

// APPLICATION CONFIGURATION
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// ROUTES
app.get('/', function(req, res){
  res.sendFile('index.html', {root : '.'});
});

// GET
app.get('/api/products', productCtrl.getProducts);

app.get('/api/products/:productID', productCtrl.getProducts)
//"http://localhost:3000/api/heroes/56cc94ee4e06810c3539d2bc"

// POST
// app.post('/api/products', products.Ctrl.createHero)

// app.post('/api/hqs', hqCtrl.createHQ)

// PASSPORT
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// When someone tries to log in to our site, how do we determine that they are who they say they are?
var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null,user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));

app.isAuthenticated = function(req, res, next){
    // If the current user is logged in...
    if(req.isAuthenticated()){
    // Middleware allows the execution chain to continue.
        return next();
    }
    // If not, redirect to login
    console.log('get outta here!')
    res.redirect('/');
}


// app.isAuthenticatedAjax = function(req, res, next){
//     // If the current user is logged in...
//     if(req.isAuthenticated()){
//     // Middleware allows the execution chain to continue.
//         return next();
//     }
//     // If not, redirect to login
//     res.send({error:'not logged in'});
// }

// app.isSteveAuthenticated = function(req, res, next){
//     // If the current user is logged in...
//     if(req.isAuthenticated() && req.user.permissions.admin === true){
//     // Middleware allows the execution chain to continue.
//         return next();
//     }
//     // If not, redirect to login
//     res.redirect('/');
// }
/** End Passport Config **/


app.post('/create-an-account', function(req, res){
    console.log(req.body)
    bcrypt.genSalt(11, function(error, salt){
            console.log('salt')

        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            console.log('hash')

            var newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });
            console.log('made a user')
            newUser.save(function(saveErr, user){
                console.log('saaved a user')
                if ( saveErr ) { res.send({ err:saveErr }) }
                else {
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })

        })
    })
})

app.post('/login', function(req, res, next){
    console.log(req.body)
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({error : 'something went wrong :('}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send({success:'success'});
        });
    })(req, res, next);
})

app.get('/logout', function(req, res){
    req.logout()
    res.redirect('/')
})


// 2 kinds of middleware
// app.use is like 'vertical middleware'. They get evaluated from top to bottom.
// there is also inline, or 'horizontal' middleware.
// app.get('/dashboard', app.isAuthenticated, function(req, res){
//     res.sendFile('/html/dashboard.html', {root: './public'})
// })

// GET request handler on server to check if someone is logged in
app.get('/api/me', function(req, res){
    console.log('user: ', req.user)
    // Return the logged in user (or undefined if they are not logged in)
    res.send({user:req.user})
})

// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})



// Module.exports / Require trace
// exports 	     require
// MODEL      => CONTROLLER
// CONTROLLER => SERVER.JS