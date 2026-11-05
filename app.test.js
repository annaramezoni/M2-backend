import { calculateCarValue } from "./app.js";
import { calcDiscountRate } from "./app.js";

// API 1
//Positive Test Case
describe("API 1 - Car Value Calculation", () => {
  test("TC01 - Civic 2014 returns 6614", () => {
    expect(calculateCarValue("Civic", 2014)).toEqual({
      car_value: 6614,
    });
  });

  //Negative Test Cases
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

  //Positive Test Cases
  test("TC08 - Honda Civic returns correct value", () => {
    expect(calculateCarValue("Honda Civic", 2020)).toEqual({
      car_value: 10820,
    });
  });

  //Negative Test Case
  test("TC10 - Null year returns error", () => {
    expect(calculateCarValue("Civic", null)).toEqual({
      error: "year is invalid",
    });
  });

  //Boundary Value Test Case
  test("TC16 - Year 0 boundary value", () => {
    expect(calculateCarValue("ABC", 0)).toEqual({
      car_value: 600,
    });
  });
});

//API 2

//API 3

//API 4

describe("API 4 - calculates the insurance premium discount rate of drives", () => {
  // negative numbers
  test("if age is negative, trhow error message", () => {
    expect(calcDiscountRate({ age: -1, experience: 4 })).toEqual({
      error: "age is invalid",
    });
  });
  test("if experience is negative or invalid, throw error message", () => {
    expect(calcDiscountRate({ age: 21, experience: -1 })).toEqual({
      error: "experience is invalid",
    });
  });
  // wrong data type
  test("if age is a string, throw error message", () => {
    expect(calcDiscountRate({ age: "eighteen", experience: 4 })).toEqual({
      error: "age is invalid",
    });
  });
  test("if age is null, throw error message", () => {
    expect(calcDiscountRate({ age: null, experience: 5 })).toEqual({
      error: "age is invalid",
    });
  });
  test("if experience is a string, throw error message", () => {
    expect(calcDiscountRate({ age: 21, experience: "ten" })).toEqual({
      error: "experience is invalid",
    });
  });
  test("if experience is null, throw an error message", () => {
    expect(calcDiscountRate({ age: 25, experience: null })).toEqual({
      error: "experience is invalid",
    });
  });
  // boundary cases
  test("if driver's experience is 5, but age is 24, no discount", () => {
    const result = calcDiscountRate({ age: 24, experience: 5 });
    expect(result.discount_rate).toBe(0);
  });
  test("if driver is 25 and has 5 year of experience, discount = 10%", () => {
    const result = calcDiscountRate({ age: 25, experience: 5 });
    expect(result.discount_rate).toBe(10);
  });
  test("if driver is 25 and has 4 years of experience, discount = 5%", () => {
    const result = calcDiscountRate({ age: 26, experience: 4 });
    expect(result.discount_rate).toBe(5);
  });
  test("if driver is 30 and has 6 years of experience, discount is 10%", () => {
    const result = calcDiscountRate({ age: 30, experience: 6 });
    expect(result.discount_rate).toBe(10);
  });
  test("if the driver is 40, and experience is 5, discount is 15%", () => {
    const result = calcDiscountRate({ age: 40, experience: 9 });
    expect(result.discount_rate).toBe(15);
  });
  test("if the driver is 39 and experience is 10, discount is 15%", () => {
    const result = calcDiscountRate({ age: 39, experience: 10 });
    expect(result.discount_rate).toBe(15);
  });
  test("if the driver is 41 and experience is 11, discount is 20%", () => {
    const result = calcDiscountRate({ age: 41, experience: 11 });
    expect(result.discount_rate).toBe(20);
  });
  //check that discount is not over 20%
  test("discount can't be over 20%", () => {
    const result = calcDiscountRate({ age: 50, experience: 30 });
    expect(result.discount_rate).toBeLessThanOrEqual(20);
  });
});
