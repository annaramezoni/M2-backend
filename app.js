import express from "express";

const app = express();
app.use(express.json());

function checkIfNumberIsValid(number) {
  if (
    number < 0 || // catches negative numbers.
    isNaN(number) || //isNaN() catches invalid numeric values.
    typeof number !== "number" || //typeof !== "number" rejects strings, null and undefined.
    !Number.isInteger(number)
  ) {
    return false;
  } else {
    return true;
  }
}

// ======== ENDPOINTS ======== //

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to our API!");
});

//API 1

//API 2

//API 3

//API 4

app.post("/discount", (req, res) => {
  const result = calcDiscountRate(req.body);
  res.status(200).json(result);
});

export function calcDiscountRate(driver) {
  const driverAge = driver.age;
  const driverExperience = driver.experience;
  let discountRate = 0;

  const ageValidation = checkIfNumberIsValid(driverAge);
  if (!ageValidation) {
    return { error: "age is invalid" };
  }
  const expValidation = checkIfNumberIsValid(driverExperience);
  if (!expValidation) {
    return { error: "experience is invalid" };
  }

  if (driverAge < 25) {
    return { discount_rate: 0 }; //even if the driver has 5 years of driverExperience, there's no discount if under 25
  }
  if (driverAge >= 25) {
    discountRate += 5;
  }
  if (driverAge >= 40) {
    discountRate += 5;
  }
  if (driverExperience >= 5) {
    discountRate += 5;
  }
  if (driverExperience >= 10) {
    discountRate += 5;
  }
  return { discount_rate: discountRate };
}

export default app;
