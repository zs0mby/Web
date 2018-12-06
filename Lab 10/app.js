const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/filedata", (req, res, next) => {
	fs.readFile('res.json', 'utf8', function(err, contents) {
		console.log(contents);
		res.json([contents]);
	});
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))