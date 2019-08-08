var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;

    var myBestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);

    console.log(sum);
    console.log(myBestMatch.friendDifference);

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log(totalDifference);
      console.log(myBestMatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log(bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log(totalDifference);

      if (totalDifference <= myBestMatch.friendDifference) {
        myBestMatch.name = friends[i].name;
        myBestMatch.photo = friends[i].photo;
        myBestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference);
    }
    console.log(myBestMatch);

    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(myBestMatch);
  });
};
