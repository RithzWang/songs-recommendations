const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/recommend', (req, res) => {
    const recommendation = `${req.body.songTitle} by ${req.body.artist}: ${req.body.comment}\n`;
    fs.appendFile('recommendations.txt', recommendation, (err) => {
        if (err) {
            return res.status(500).send('Error saving recommendation');
        }
        res.status(200).send('Recommendation saved');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
