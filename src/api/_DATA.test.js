import {_saveQuestion,_saveQuestionAnswer} from "_DATA";


// write an async unit test for _saveQuestion to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.

describe("_saveQuestion", () => {
    it("verify that the saved question is returned and all expected fields are populated", async () => {
        const question = {
            optionOneText: "test option one",
            optionTwoText: "test option two",
        }
        const savedQuestion = await _saveQuestion(question);
        expect(savedQuestion).toEqual({
        });
    });
});

// for the _DATA.js file, write an async unit test for _saveQuestion to verify that an error is returned if incorrect data is passed to the function.

describe("verify that an error is returned if incorrect data is passed", () => {
    it("should return an error if incorrect data is passed", async () => {
        const question = {
            optionOneText: "test option one",
        }
        const savedQuestion = await _saveQuestion(question);
        expect(savedQuestion).toEqual({
        });
    });
});


// Write an async unit test for _saveQuestionAnswer to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.

describe("_saveQuestionAnswer", () => {
    it("should return a question object", async () => {
        const question = {
            optionOneText: "test option one",
            optionTwoText: "test option two",
        }
        const savedQuestion = await _saveQuestion(question);
        expect(savedQuestion).toEqual({
        });
    });
});
