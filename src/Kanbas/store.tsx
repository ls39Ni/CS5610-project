import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/Reducer";
import quizReducer from "./Courses/Quizzes/reducer";

export interface KanbasState {
  quizReducer: {
    quizList: any[];
    quiz: any;
  };
}

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    accountReducer,
    quizReducer,
  },
});
export default store;
