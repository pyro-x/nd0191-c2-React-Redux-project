import { getInitialData } from "../api/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {

      const usersWithAvatar = Object.values(users).reduce((acc, user) => {
        const avatarURL = `https://api.dicebear.com/5.x/avataaars/svg?seed=${user.id}&style=circle`;
        acc[user.id] = { ...user, avatarURL };
        return acc;
      }, {});

      dispatch(setAuthedUser(null));
      dispatch(receiveUsers(usersWithAvatar));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}