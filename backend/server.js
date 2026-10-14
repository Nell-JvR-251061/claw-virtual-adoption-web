const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const dogRoutes = require('./routes/dogRoutes');

app.use("/api/auth", authRoutes);
app.use("/api/dog", dogRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("---------- MongoDB Connected! :) ----------"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("---------- Server running on port 5000 ----------");
});