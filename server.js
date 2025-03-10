const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewParserLogic: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connection donee"))
//   .catch((err) => console.error("Connection error:", err));

mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log("MongoDB connection donee"))
  .catch((err) => console.error("Connection error:", err));


app.get("/", (req, res) => {
    res.send("This is my server buddy!!");
});

const data = {
    "posts": [
        {"id": 1, "title": "First Post", "content": "This is the first post"},
        {"id": 2, "title": "Second Post", "content": "This is the second post"}
    ],
    "users": [
        {"id": 1, "name": "Sri charan"},
        {"id": 2, "name": "Bukka"}
    ]
};

app.get("/data", async (req, res) => {
    try{
        // const Data = await data.find();
        res.json(data);
    } catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});