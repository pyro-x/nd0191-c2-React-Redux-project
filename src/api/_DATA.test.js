
import { _saveQuestion , _saveQuestionAnswer} from "./_DATA";

// write an async unit test for _saveQuestion to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.

describe("_saveQuestion", () => {
    it("verify that the saved question is returned and all expected fields are populated", async () => {
        const question = {
            optionOneText: "test option one",
            optionTwoText: "test option two",
            author: "tylermcginnis"
        }
        const savedQuestion = await _saveQuestion(question);
        expect(savedQuestion.author).toEqual("tylermcginnis");
        expect(savedQuestion.optionOne.text).toEqual("test option one");
        expect(savedQuestion.optionTwo.text).toEqual("test option two");
    });

    // write an async unit test for _saveQuestion to verify that an error is returned if incorrect data is passed to the function.
    it("should return an error if incorrect data is passed", async () => {
        const question = {
            optionOneText: "test option one",
        }
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});


// Write an async unit test for _saveQuestionAnswer to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.

describe("_saveQuestionAnswer", () => {
    it("verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed", async () => {
        const answer = {

            authedUser:"tylermcginnis",
            qid:"8xf0y6ziyjabvozdd253nd",
            answer:"optionOne"
        }
        const savedAnswer = await _saveQuestionAnswer(answer);

        expect(savedAnswer).toEqual(true);
    });

    // write an async unit test for _saveQuestionAnswer to verify that an error is returned if incorrect data is passed to the function.
    it ("verify that an error is returned if incorrect data is passed to the function", async () => {
        const answer = {
            answer:"optionOne"
        }

        await expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});



