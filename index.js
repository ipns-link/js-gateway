const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('Application started and Listening on port 3000');
	console.log(`Server relative path is: ${__dirname}`);
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
