import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello! Welcome to our API!");
});

// ======== ENDPOINTS ======== //

//API 1

//API 2

//API 3

//API 4
export const sum = (num1, num2) => {
  return num1 + num2;
};
app.get("/sum", (req, res) => {
  res.send({ result: sum(2, 2) });
});

export default app;
