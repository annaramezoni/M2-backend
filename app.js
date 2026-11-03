import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to our API!");
});

// ======== ENDPOINTS ======== //

//API 1

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
