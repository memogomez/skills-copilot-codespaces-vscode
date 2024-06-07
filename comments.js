// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Path: comments.js
// Create comment
app.post('/comments', (req, res) => {
    res.send('Create comment');
});

// Path: comments.js
// Read comment
app.get('/comments', (req, res) => {
    res.send('Read comment');
});

// Path: comments.js
// Update comment
app.put('/comments', (req, res) => {
    res.send('Update comment');
});

// Path: comments.js
// Delete comment
app.delete('/comments', (req, res) => {
    res.send('Delete comment');
});

// Path: comments.js
// Start web server
app.listen(port, () => {
    console.log(`Comments service listening at http://localhost:${port}`);
});