// Import the function that we're testing from the calc.js file
// Assign it to a constant so that it isn't overwritten
const addition = require("../calc.js");

describe("Calculator", () => {
    // This would fail because addition is not a function yet so we would need to create the function in the calc.js file
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
    // Now the first test passes, the second one doesn't so now we need to adjust our addition function in the calc.js file
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multipy function", () => {

    });
    describe("Division function", () => {

    });
});