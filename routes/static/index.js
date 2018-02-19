var express = require('express');
var router = express.Router();

var fs = require('fs');
var teams = null;
if (fs.existsSync('assets/teamNames.txt')) {
    teams = fs.readFileSync('assets/teamNames.txt', 'utf8').split('\n');
    if (teams.length > 0 && teams[teams.length - 1] == '') {
        teams.pop()
    }
    console.log('Loaded ' + teams.length + ' team names');
    if (teams.length == 0) teams = null;
} else {
    console.log('No team names: assets/teamNames.txt does not exist');
}

router.get('/', function(req, res) {
    res.render('index.html', {'teamNames': teams});
});

module.exports = router;
