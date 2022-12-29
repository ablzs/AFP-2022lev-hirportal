const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const news = [
  {
    id: 1,
    title: "A legelso",
    content: "Legelso hir tartalma",
  },
  {
    id: 2,
    title: "Masodik hir",
    content: "Masodik hir tartalma",
  },
];

app.get("/news", (request, response) => {
  response.send(news);
});

app.listen(3000, () => console.log("listening on port 3000..."));
