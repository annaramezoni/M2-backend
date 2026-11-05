import express from "express";

const app = express();
app.use(express.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to our API!");
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

app.post("/discount", (req, res) => {
  const result = calcDiscountRate(req.body);
  res.status(200).json(result);
});

export function calcDiscountRate(driver) {
  const age = driver.age;
  const exp = driver.experience;
  let discountRate = 0;

  if (driver.age < 0 || isNaN(driver.age) || typeof driver.age !== "number") {
    return { error: "age is invalid" };
  }
  if (
    driver.experience < 0 || // isNaN() catches invalid numeric values.
    isNaN(driver.experience) || //isNaN() catches invalid numeric values.
    typeof driver.experience !== "number" //typeof !== "number" rejects strings, null and undefined.
  ) {
    return { error: "experience is invalid" };
  }
  if (age < 25) {
    return { discount_rate: discountRate }; //even if the driver has 5 years of experience, there's no discount if under 25
  }
  if (age >= 25) {
    discountRate += 5;
  }
  if (age >= 40) {
    discountRate += 5;
  }
  if (exp >= 5) {
    discountRate += 5;
  }
  if (exp >= 10) {
    discountRate += 5;
  }
  if (discountRate <= 20) {
    return { discount_rate: discountRate };
  }
}

export default app;
