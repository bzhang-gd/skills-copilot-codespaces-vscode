// create web server
const express = require('express');
const app = express();
const port = 3000;

// get comments
app.get('/comments', (req, res) => {
    // get comments from database
    // send comments to client
    res.send('Comments');
});

// add comment
app.post('/comments', (req, res) => {
    // add comment to database
    // send response to client
    res.send('Comment added');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});