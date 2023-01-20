export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_VOTE ="ADD_VOTE"
export const ADD_QUESTION = "ADD_QUESTION"


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}



export function addVote({ authedUser, qid, answer }) {
  return {
      type: ADD_VOTE,
      authedUser,
      qid ,
      answer
  };

}

export function addQuestion ({ authedUser , qid}) {

  console.log ("user addQuestion", authedUser, qid);
  return {
      type: ADD_QUESTION,
      authedUser,
      qid
  };

}