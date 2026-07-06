import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Basecampy : Project Management Platform!");
});

export default app;