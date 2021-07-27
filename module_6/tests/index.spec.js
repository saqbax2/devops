const fcalculadora = require("./index")
test(" 4", () => {
    expect(fcalculadora.plus(2,2)).toBe(4);
});

test("Returns 0", () => {
    expect(fcalculadora.resta(2,2)).toBe(0);
});
