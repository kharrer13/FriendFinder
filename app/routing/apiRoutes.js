const path = require('path');

const friends = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', (req, res) => {
		res.json(friends);
	});

	app.post('/api/friends', (req, res) => {
		const userInput = req.body;
		const userResponses = userInput.scores;
		let foundName = '';
		let foundImage = '';
		let totalDifference = 40; 

		for (let i = 0; i < friends.length; i++) {
			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			if (diff < smallestlDiff) {
				smallestDiff = diff;
				foudnName = friends[i].name;
				foundImage = friends[i].photo;
			}
        }
        
		friends.push(userInput);

		res.json({status: 'OK', foundName: foundName, foundImage: foundImage});
	});
};