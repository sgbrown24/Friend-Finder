// DEPENDENCIES
var express = require("express");
var path = require("path");
// creating an "express" server
var app = express();

// port for listener
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

// ROUTER
//  require("./routes/apiRoutes")(app);
//  require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
