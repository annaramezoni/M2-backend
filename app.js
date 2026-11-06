import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to our API!");
});

// ======== ENDPOINTS ======== //

//API 1

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
  const claim_history = accident.claim;
  let risk_rating = 0;

  if (typeof claim_history !== 'string') {
    return { error: "invalid entry" };
  }

  risk_rating += containsKeywords(claim_history);

  return Math.min(risk_rating, 5); // keeps the rating to a maximum of 5
}

//API 3

//API 4
export const sum = (num1, num2) => {
  return num1 + num2;
};
app.get("/sum", (req, res) => {
  res.send({ result: sum(2, 2) });
});

export default app;
