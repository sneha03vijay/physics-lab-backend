const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/userRoutes');

const app = express();

// ✅ IMPORTANT: use your actual frontend deployed URL here
const corsOptions = {
  origin: "https://physics-lab-frontend.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));
