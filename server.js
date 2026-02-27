const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1><p>My Render web service is live!</p>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});