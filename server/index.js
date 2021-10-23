const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/run", require("./routes/run"));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
