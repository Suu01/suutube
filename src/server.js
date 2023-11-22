import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle");
  return res.send("I have the power now");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

app.listen(4000, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
