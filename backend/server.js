const express = require("express");

const app = express();

const port = 5000;

const root = require("./routes/root");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", root);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
