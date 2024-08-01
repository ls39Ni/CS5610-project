import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "./client";

const initialState = {
  quizList: [] as Quiz[],
  quiz: {
    _id: "100",
    courseId: "",
    title: "New Quiz",
    description: "",
    assignmentGroup: "Quizzes",
    available: "2024-08-01",
    due: "2024-08-08",
    points: "0",
    open: false,
    questions: 0,
    published: false,
    shuffleAnswers: true,
    timeLimit: "25",
    multipleAttempts: false,
    showCorrectAnswers: true,
    accessCode: "None",
    oneQuestionAtTime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    untilDate: "2024-08-10",
    quizType: "Graded Quiz",
  },
};

const quizzesSlice = createSlice({
  name: "quizList",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizList = [...state.quizList, action.payload];
    },
    setQuizList: (state, action) => {
      state.quizList = action.payload;
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
