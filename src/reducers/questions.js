import { RECEIVE_QUESTIONS } from "../actions/questions";
import { VOTE_QUESTION } from "../actions/questions";
import { ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case VOTE_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                     }
                    }
                };
        case ADD_QUESTION:
            return {
                ...state,
                [action.author]: action.question,
            };
        default:
            return state;
    }
}