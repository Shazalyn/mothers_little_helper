const express = require('express');
const app = express();

// const timePicker = require('time-picker');
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
const session = require('express-session');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.use(session({
  secret: 'super_secred_string',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

/* Change this line! */
var db = pgp('postgres://shannon@localhost:5432/newbaby_db');

app.get('/', function(req, res){
  if(req.session.user){
    let data = {
      "logged_in": true,
      "email": req.session.user.email
    };

    res.render('index', data);
  } else {
    res.render('index');
  }
});

app.get('/login', function(req, res){
  res.render('login/index');
});

app.get('/activity', function(req, res){
  res.render('activity/index');
});

app.get('/signup', function(req, res){
  res.render('signup/index');
});

app.post('/login', function(req, res){
  let data = req.body;
  let auth_error = "Authorization Failed: Invalid email/password";
  db
    .one("SELECT * FROM child WHERE email = $1", [data.email])
    .catch(function(){
      res.send(auth_error);
    })
    .then(function(user){
      bcrypt.compare(data.password, user.password_digest, function(err, cmp){
        if(cmp){
          req.session.user = user;
          res.redirect("/activity");
        } else {
          res.send(auth_error);
        }
      });
    });
});


app.post('/signup', function(req, res){
  let data = req.body;
  console.log("hey");
  bcrypt
    .hash(data.password, 10, function(err, hash){
      db.none(
        "INSERT INTO child (email, password_digest, kid_name) VALUES ($1, $2, $3)",
        [data.email, hash, data.kid_name]
      ).then(function(){
        // res.send('User created!');
        res.redirect("/login")
      })
      .catch(function(e){
        res.send('Failed to create user: ' + e);
      })
    });
});

app.post('/activity', function(req, res){
  let data = req.body;
  console.log("yeah");
  console.log("req.body:", data)
    db.any(
          "INSERT INTO eat(day, eat_time, formula, milk, child_id) VALUES($1, $2, $3, $4, $5)",
          [data.day, data.eat_time, data.formula, data.milk,data.child_id]
    ).then(function(){
        db.none(
          "INSERT INTO go( day, go_time, pee, poo, child_id) VALUES($1, $2, $3, $4, $5)",
      [data.day, data.go_time, data.pee, data.poo, data.child_id]
        ).then(function(){
           db.none(
            "INSERT INTO sleep( day, sleep_start, sleep_end, child_id) VALUES($1, $2, $3, $4)",
          [data.day, data.sleep_start, data.sleep_end, data.child_id]
            ).then(function(){

// .send('User created!');
            res.redirect("/activity")
            })
            .catch(function(e){
              res.send('data not accepted: ' + e);
            });
        });
    });
});

// app.post('/activity', function(req, res){
//   let data = req.body;
//   console.log("food");
//   console.log("req.body:", data)
//     db.none(
//       "INSERT INTO eat( eat_date, eat_time, formula, milk, child_id) VALUES($1, $2, $3, $4, $5)",
//       [data.eat_date, data.eat_time, data.formula, data.milk, data.child_id]
//     ).then(function(){
//         // db.none(
//         //   "INSERT INTO eat( go_date, eat_time, formula, milk, child_id) VALUES($1, $2, $3, $4, $5)",
//         //   [data.go_date, data.eat_time, data.formula, data.milk,data.child_id]
//         // ).then(function(){
//         //    db.none(
//         //   "INSERT INTO sleep( sleep_date, sleep_start, sleep_end, , child_id) VALUES($1, $2, $3, $4, $5)",
//         //   [data.sleep_date, data.sleep_start, data.sleep_end, ,data.child_id]
//         //     ).then(function(){

// // .send('User created!');
//       res.redirect("/activity")
//     })
//     .catch(function(e){
//       res.send('data not accepted: ' + e);
//     });
// });
app.put('/user', function(req, res){
  db
    .none("UPDATE users SET email = $1 WHERE email = $2",
      [req.body.email, req.session.user.email]
    ).catch(function(){
      res.send('Failed to update user.');
    }).then(function(){
      res.send('User updated.');
    });
});

app.get('/logout', function(req, res){
  req.session.user = false;
  res.redirect("/");
});

app.listen(3017, function () {
  console.log('Server running, listening on port 3017!')
});
