const myFunc = require("../src/romanizer")

describe('calculate', ()=> {
    it("should return 'X' when input 10", function () {
        expect('X').toEqual(myFunc(10));
    });
})