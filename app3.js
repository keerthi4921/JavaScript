const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <script>
            console.log('hello world');
        </script>

        <h2>Open the browser</h2>
    `);
});

app.listen(1000, () => {
    console.log('Server running on http://localhost:1000');
});
