const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (email === "test@test.com" && password === "12345678") {
        return res.json({
            token: "FAKE-TOKEN-12345"
        });
    }

    return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
