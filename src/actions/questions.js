import { saveQuestion, saveQuestionAnswer } from "../api/api";
import { addVote, addQuestion as addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
        };
    }



export function handleVoteQuestion (info) {

    return (dispatch) => {
        return saveQuestionAnswer(info).then((question) => {
            dispatch(voteQuestion(info))
            dispatch(addVote(info)) 

        }).catch((e) => {
            console.warn("Error in handletoggletweet:",e)
            alert ("There was an error voting this poll, please try again.");
        });
    } ;

}
function voteQuestion({ authedUser, qid, answer }) {
    return {
        type: VOTE_QUESTION,
        authedUser,
        qid ,
        answer
    };

}

export function handleSaveQuestion (info) {
    return (dispatch) => {

       return saveQuestion(info).then((question) => {
                 dispatch(addQuestion({
                                    author: question.author,
                                    question: {...question}
                                }))
                dispatch(addQuestionToUser({
                                    authedUser: question.author,
                                    qid: question.id
                }));
            }).catch((e) => {
                console.warn("Error in handleAddQuestion:",e)
                alert ("There was an error adding this poll, please try again.");
            });
    }
}

export function addQuestion({ author, question }) {
    return {
        type: SAVE_QUESTION,
        author,
        question
    };
}