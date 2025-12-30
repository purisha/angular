const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- LOGIN ---------------- */
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
        token: 'FAKE-TOKEN',
        message: 'Login successful'
    });
});

/* ---------------- RESERVE ---------------- */
app.post('/api/reserve', (req, res) => {
    const { fullName, email, city, checkIn, checkOut } = req.body;

    if (!fullName || !email || !city || !checkIn || !checkOut) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    let reserve = [];

    if (fs.existsSync('reserve.json')) {
        reserves = JSON.parse(fs.readFileSync('reserve.json', 'utf8') || '[]');
    }

    const newReserve = {
        id: 'RSV-' + Date.now(),
        fullName,
        email,
        city,
        checkIn,
        checkOut,
        createdAt: new Date().toISOString()
    };

    reserve.push(newReserve);

    fs.writeFileSync(
        'reserve.json',
        JSON.stringify(reserve, null, 2)
    );

    res.json({
        success: true,
        reserveId: newReserve.id,
        message: 'Reserve confirmed'
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

