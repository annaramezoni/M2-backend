import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to our API!");
});

// ======== ENDPOINTS ======== //

// API 1

export function calculateCarValue(model, year) {
  if (
    model === null ||
    model === undefined ||
    typeof model !== "string" ||
    model.trim() === ""
  ) {
    return {
      error: "model is invalid",
    };
  }

  if (
    year === null ||
    year === undefined ||
    typeof year !== "number" ||
    isNaN(year) ||
    year < 0
  ) {
    return {
      error: "year is invalid",
    };
  }

  let total = 0;

  for (let char of model.toUpperCase()) {
    if (char >= "A" && char <= "Z") {
      total += char.charCodeAt(0) - 64;
    }
  }

  return {
    car_value: total * 100 + year,
  };
}

app.post("/car-value", (req, res) => {
  const { model, year } = req.body;

  const result = calculateCarValue(model, year);

  res.send(result);
});

//API 2

//API 3

//API 4

export default app;
