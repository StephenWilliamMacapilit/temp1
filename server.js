const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Nath! This will be our testing grounds for now.");
  res.send("Our tech stack is as follows:");
  res.send("Fronted = HTML & CSS (maybe PHP or REACT");
  res.send("Backend = Node.js");
  res.send("Database = Postgres");
  res.send("Server = Render (Subject to change)");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
