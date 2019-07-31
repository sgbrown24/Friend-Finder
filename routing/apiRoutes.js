// LOAD DATA
var friendsArray = require("../data/friends");


module.exports = function(app) {
  
  app.get("/api/frirndsArray", function(req, res) {
    res.json(frirndsArray);
  });

  // API POST Requests

  app.post("/api/friendsArray", function(req, res) {
      var difference =  0;
      var match = {
          name: "",
          photo: "",
          friendsDifference: 1000
      };
    var userData = req.body;
    var userName = userData.name;
    var userScore = userData.scores;
    var a = userScore.map(function(item) {
        return parseInt(item, 10);
    });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: a
    }
 console.log("name: " + userName);
 console.log("user score" + userScore);


 var sum = a.reduce((a, b) => a + b, 0);
 console.log("sume od users score" + sum);
 console.log("best match"  + match.difference)


//  for loop
for (var i = 0; i <  friendsArray.length; i++){
    console.log(friendsArray[i].name);
    difference  = 0;
    console.log("diff" + difference);
    console.log("match+diff" + match.difference);

    var frScore = friendsArray[i].scores.reduce((a, b) => a  + b, 0);
    console.log("friend score" + frScore);
    difference += Math.abs(sum - frScore);
    console.log("===============" + difference);

    if (difference <= match.friendsDifference) {
        match.name =  friendsArray[i].name;
        match.photo =  friendsArray[i].photo;
        match.friendsDifference  = difference;
    }
    console.log(difference + "diff");
    console.log(match);
    friendsArray.push(userData);
    console.log("new user added");
    console.log(userData);
}
res.json(match);

    });
  
};
