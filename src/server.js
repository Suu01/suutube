import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  //   console.log(req);
  //   console.log(res);
  //   return res.end();
  return res.send("I still love you.");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(4000, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
