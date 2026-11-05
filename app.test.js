import { sum, calcRiskRating } from "./app.js";

// API 1

//API 2
// Boundary cases
  // Making sure the 5 keyword limit works as expected
  test("confirm working API: Exactly 5 keywords returns 5", () => {
    expect(calcRiskRating({ claim: "Crash, smash, bump, collide, scratch." })).toEqual(5);
  });
  test("confirm working API: More than 5 keywords still returns 5", () => {
    expect(calcRiskRating({ claim: "Crash, smash, bump, collide, scratch, crash" })).toEqual(5);
  });
// ----------------------------------------------------------------------------------------------------------------------
  // String testing
  test("confirm working API: adding letters to the keyword still returns +1", () => {
    expect(calcRiskRating({ claim: "The car crashed and smashed! Then it bumped and collided with another car, scratching and smashing it." })).toEqual(5);
  });
  test("confirm working API: keywords missing a letter return 0", () => {
    expect(calcRiskRating({ claim: "Crash, smah, ump, colde, scrtch." })).toEqual(1);
  });
  test("confirm working API: keywords next to each other without a space return 1", () => {
    expect(calcRiskRating({ claim: "Crashsmash." })).toEqual(1);
  });
// ----------------------------------------------------------------------------------------------------------------------
// Positive test cases (expected behaviour)
describe("API 2 - converts customer insurance claims to a 'risk rating'", () => {
  // Normal behaviour
  test("confirm working API: One keyword returns 1", () => {
    expect(calcRiskRating({ claim: "I got into a car crash." })).toEqual(1);
  });
});
  test("confirm working API: No keywords returns 0", () => {
    expect(calcRiskRating({ claim: "My car broke." })).toEqual(0);
  });

  test("confirm working API: More than one keyword returns >1, in this case, 3", () => {
    expect(calcRiskRating({ claim: "The car crashed and bumped and collided." })).toEqual(3);
  });

  test("confirm working API: A repeated keyword is returned multiple times", () => {
    expect(calcRiskRating({ claim: "I got in a car crash crash crash." })).toEqual(3);
  });
// ----------------------------------------------------------------------------------------------------------------------
  // Alternate punctuation
  test("confirm working API: Upper and mixed case strings still work as intended", () => {
    expect(calcRiskRating({ claim: "The car cRaShEd. CRASHED. crashed..." })).toEqual(3);
  });

  test("confirm working API: Punctuation and spaces added between words work as intended", () => {
    expect(calcRiskRating({ claim: "The car crashed! Then it bumped like   CRASH." })).toEqual(3);
  });
// ----------------------------------------------------------------------------------------------------------------------
// Negative test cases
describe("API 2 - fails to convert customer insurance claims to a 'risk rating'", () => {
  test("error expected: returns an error when claim is missing", () => {
    expect(calcRiskRating({})).toEqual({ error: "invalid entry" });
  });
});
  test("error expected: returns an error when claim is not a string", () => {
    expect(calcRiskRating({ claim: 1234 })).toEqual({ error: "invalid entry" });
  });

  test("error expected: returns an error when claim is null", () => {
    expect(calcRiskRating({ claim: null })).toEqual({ error: "invalid entry" });
  });
  
  test("error expected: returns 0 when claim is an empty string", () => {
    expect(calcRiskRating({ claim: "" })).toEqual(0);
  });

//API 3

//API 4

describe("API 4", () => {
  test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
