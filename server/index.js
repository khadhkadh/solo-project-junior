const express = require("express");
const cors = require("cors");
const router = require("./routes/merch");
const PORT = 8080;
const app = express();
const db = require('./mysql/index')

app.use(express.json());
app.use(cors());

app.use("/api/merch", router)


app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
