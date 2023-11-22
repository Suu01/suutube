import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(4000, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
