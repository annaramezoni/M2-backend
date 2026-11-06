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

function checkIfObjectIsValid(object) {
  if (!object || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  return true;
}

// ======== ENDPOINTS ======== //

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

app.post("/driver-rating", (req, res) => {
  try {
    const risk_rating = (calcRiskRating(req.body));

    if (risk_rating.error) {
      return res.status(400).json(risk_rating);
    }

    res.status(200).json(risk_rating);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." })
  }
})

const keywords = ['collide', 'crash', 'scratch', 'bump', 'smash'];

function containsKeywords(text) {
  return text
    .toLowerCase() // changes all letters in the user's claim to lowercase, before passing them through keywords array
    .split(' ') // splits the claim word-by-word, before checking them individually
    .filter(word => keywords.some(keyword => word.includes(keyword))) // filters the new split array and only pulls strings it compares with the keywords array
    .length; // gives the number of strings pulled from the filtered array, which would be the final return passed down the function to the riskRating constant
}

export function calcRiskRating(accident) {
  const claim_history = accident?.claim;
  let risk_rating = 1;

  if (typeof claim_history !== 'string') {
    return { error: "invalid entry" };
  }

  risk_rating = containsKeywords(claim_history);

  return Math.max(1, Math.min(risk_rating, 5)); // keeps the rating to a minimum of 1, maximum of 5
}

//API 3

//API 4

app.post("/discount", (req, res) => {
  const result = calcDiscountRate(req.body);

  if (result.error) {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
});

export function calcDiscountRate(driver) {
  //Object validation - Initial validation before accessing the properties
  const objectValidation = checkIfObjectIsValid(driver);

  if (!objectValidation) {
    return { error: "invalid entry" };
  }
  const driverAge = driver.age;
  const driverExperience = driver.experience;
  let discountRate = 0;

  //Property validation
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
