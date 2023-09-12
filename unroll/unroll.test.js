const unroll = require("./unroll");
const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];

const bigAssSquare = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
];

describe("#unroll", function () {
    it("is a function", function () {
        expect(typeof unroll).toEqual("function");
    });
    it("works for square", function () {
        expect(unroll(square)).toEqual([
            1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
        ]);
    });
    it("works for smallerSquare", function () {
        expect(unroll(smallerSquare)).toEqual([
            "a",
            "b",
            "c",
            "f",
            "i",
            "h",
            "g",
            "d",
            "e",
        ]);
    });
    it("works for bigAssSquare", function () {
        expect(unroll(bigAssSquare)).toEqual([
            1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19,
            13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21,
        ]);
    });
});
