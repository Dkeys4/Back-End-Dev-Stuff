import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello world, Dural is here! This is my first server, built with Express"
  );
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
