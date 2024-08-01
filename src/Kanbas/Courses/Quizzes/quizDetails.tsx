import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaBan, FaCheckCircle, FaEllipsisV, FaPen } from "react-icons/fa";
import { Quiz } from "./client";
import { Link } from "react-router-dom";
import "./index.css";
import * as client from "./client";

export default function QuizDetails() {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState<Quiz>({
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
    });

    useEffect(() => {
        const fetchQuiz = async () => {
            const quiz = await client.findQuizById(quizId + '');
            setQuiz(quiz);
        };

        fetchQuiz();
    }, [quizId]);

    const publishQuiz = async (quizToUpdate: Quiz) => {
        try {
            const updatedQuiz = { ...quizToUpdate, published: !quizToUpdate.published };
            setQuiz(updatedQuiz);
            await client.updateQuiz(updatedQuiz);
        } catch (err) {
            console.log("Publish Quiz Error", err);
        }
    };

    return (
        <>
            <div className="flex-buttons-container">
                <h4 style={{ marginRight: "auto" }}>{quiz.title} Details</h4>
                {quiz.published ? (
                    <div className="btn green-btn" onClick={() => publishQuiz(quiz)}>
                        <FaCheckCircle className="" /> Published
                    </div>
                ) : (
                    <div className="btn grey-btn" onClick={() => publishQuiz(quiz)}>
                        <FaBan className="text-failure" /> Unpublished
                    </div>
                )}
                <Link to={`/Kanbas/Courses/${quiz.courseId}/Quizzes/QuizPreview/${quizId}`} className="btn modules-button"> Preview </Link>
                <Link to={`/Kanbas/Courses/${quiz.courseId}/Quizzes/QuizDetailsEditor/${quizId}`} className="btn modules-button"> <FaPen /> Edit </Link>
                <div className="btn modules-button"> <FaEllipsisV /> </div>
            </div>
            <hr style={{ marginRight: "15px" }}></hr>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {renderQuizDetails(quiz)}
            </div>
        </>
    );
}

function renderQuizDetails(quiz: Quiz) {
    const details = [
        { label: "Quiz Title", value: quiz.title },
        { label: "Quiz Description", value: quiz.description },
        { label: "Quiz Type", value: quiz.quizType },
        { label: "Points", value: quiz.points },
        { label: "Assignment Group", value: quiz.assignmentGroup },
        { label: "Shuffle Answers", value: boolToString(quiz.shuffleAnswers) },
        { label: "Time Limit", value: `${quiz.timeLimit} Minutes` },
        { label: "Multiple Attempts", value: boolToString(quiz.multipleAttempts) },
        { label: "Show Correct Answers", value: boolToString(quiz.showCorrectAnswers) },
        { label: "Access Code", value: quiz.accessCode },
        { label: "One Question at a Time", value: boolToString(quiz.oneQuestionAtTime) },
        { label: "Webcam Required", value: boolToString(quiz.webcamRequired) },
        { label: "Lock Questions After Answering", value: boolToString(quiz.lockQuestionsAfterAnswering) },
        { label: "Due Date", value: quiz.due },
        { label: "Available Date", value: quiz.available },
        { label: "Until Date", value: quiz.untilDate },
    ];

    return details.map(detail => (
        <div key={detail.label}>
            <label className="detailLabel">{detail.label}: </label> {detail.value}
        </div>
    ));
}

function boolToString(bool: boolean) {
    return bool ? "Yes" : "No";
}