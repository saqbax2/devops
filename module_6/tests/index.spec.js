const plus = require("./index")
test(" 4", () => {
    expect(plus(2,2)).toBe(4);
});

test("Returns 0", () => {
    expect(resta(2,2)).toBe(0);
});
