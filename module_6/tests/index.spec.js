const plus = require("./index")
test(" 4", () => {
    expect(calculator.plus(2,2)).toBe(4);
});

test("Returns 0", () => {
    expect(calculator.resta(2,2)).toBe(0);
});
