import { calculateCarValue } from "./app.js";

// API 1

describe("API 1 - Car Value Calculation", () => {
  test("TC01 - Civic 2014 returns 6614", () => {
    expect(calculateCarValue("Civic", 2014)).toEqual({
      car_value: 6614,
    });
  });

  test("TC03 - Negative year returns error", () => {
    expect(calculateCarValue("Task-Force", -987)).toEqual({
      error: "year is invalid",
    });
  });

  test("TC04 - Invalid year datatype returns error", () => {
    expect(calculateCarValue("C200", "twenty twenty")).toEqual({
      error: "year is invalid",
    });
  });

  test("TC05 - Empty model returns error", () => {
    expect(calculateCarValue("", 2020)).toEqual({
      error: "model is invalid",
    });
  });

  test("TC08 - Honda Civic returns correct value", () => {
    expect(calculateCarValue("Honda Civic", 2020)).toEqual({
      car_value: 10820,
    });
  });

  test("TC10 - Null year returns error", () => {
    expect(calculateCarValue("Civic", null)).toEqual({
      error: "year is invalid",
    });
  });

  test("TC16 - Year 0 boundary value", () => {
    expect(calculateCarValue("ABC", 0)).toEqual({
      car_value: 600,
    });
  });
});

//API 2

//API 3

//API 4
