import { saveQuestion, saveQuestionAnswer } from "../api/api";
import { addVote } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
        };
    }



export function handleVoteQuestion (info) {

    console.log ("handleVoteQuestion", info);
    return (dispatch) => {
        dispatch(voteQuestion(info))
        dispatch(addVote(info)) 
        return saveQuestionAnswer(info).catch((e) => {
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

export function handleAddQuestion (info) {
    return (dispatch) => {

        console.log ("handleAddQuestion", info);
       return saveQuestion(info).then((question) => {
                console.log ("new formatted question", question);
                 dispatch(addQuestion({
                                    author: question.author,
                                    question: {...question}
                                }))
            }).catch((e) => {
                console.warn("Error in handleAddQuestion:",e)
                alert ("There was an error adding this poll, please try again.");
            });
    }
}

export function addQuestion({ author, question }) {
    return {
        type: ADD_QUESTION,
        author,
        question
    };
}