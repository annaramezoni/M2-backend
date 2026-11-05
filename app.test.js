import { sum, calcRiskRating } from "./app.js";

// API 1

//API 2

describe("API 2 - converts customer insurance claims to a 'risk rating'", () => {
  test("confirm the API is working as intended", () => {
    expect(calcRiskRating({ claim: "The car crashed." })).toEqual(1);
  });
});

//API 3

//API 4

describe("API 4", () => {
  test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
