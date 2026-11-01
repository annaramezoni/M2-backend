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
//dummy data
const driver = {
  age: 30,
  experience: 5,
};
export function calcDiscountRate(driver) {
  const age = driver.age;
  const exp = driver.experience;
  let discountRate = 0;

  if (driver.age < 0 || isNaN(driver.age)) {
    return { error: "age is invalid" };
  }
  if (driver.experience < 0 || isNaN(driver.experience)) {
    return { error: "experience is invalid" };
  }
  if (age < 25) {
    return discountRate;
  }
  if (age >= 25) {
    discountRate += 0.05;
  }
  if (age >= 40) {
    discountRate += 0.05;
  }
  if (exp >= 5) {
    discountRate += 0.05;
  }
  if (exp >= 10) {
    discountRate += 0.05;
  }
  if (discountRate <= 0.2) {
    return Number(discountRate.toFixed(2));
  }
}
console.log(calcDiscountRate(driver));
app.get("/discount", (req, res) => {
  res.send(calcDiscountRate());
});

export default app;
