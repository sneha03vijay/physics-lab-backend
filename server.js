const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/userRoutes');

const app = express();

// ✅ CORRECT: Add CORS origins properly
app.use(cors({
    origin: ["http://127.0.0.1:5500", "https://physics-lab-frontend.vercel.app"]
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
}).catch(err => console.log(err));
