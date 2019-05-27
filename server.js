const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')

books = {
	'1984': 'George Orwell',
	'Twilight' : 'Stephanie Meyer',
	'Hamlet' : 'Shakespeare',
	'The Notebook' : 'Nicolas Sparks'
}

app.use(cors());

app.get('/book/:title', (req, res) => {

	const ans = books[req.params.title] // this is where the Google api would go for next part
	res.send(ans) // where express server communicates back
});

app.listen(port, () => console.log(`Example app listening on port 
${port}!`));
