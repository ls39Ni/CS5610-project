import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/table";
import Quizzes from "./Quizzes";
import QuizDetailsEditor from "./Quizzes/quizDetailEditor";
import QuizDetails from "./Quizzes/quizDetails";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses, FaGreaterThan } from "react-icons/fa";

export default function Courses({ courses }: { courses: any[] }) {
  const cid = useParams();
  const course = courses.find((course) => course._id === cid.id);
  const { pathname } = useLocation();

  function CreateBreadcrumbNav(): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="wd-courses">
      <div className="breadcrumb-nav-container" style={{ color: "black" }}>
        <div className="breadcrumb-nav-item btn">
          <HiMiniBars3 className="fs-2" />
        </div>
        <h5 style={{ display: "flex", marginTop: "8px" }}>
          <span className="breadcrumb-nav-item">
            {course?.number}{" "}
            <FaGreaterThan className="fs-6" style={{ color: "black" }} />{" "}
            {CreateBreadcrumbNav()}
          </span>
        </h5>
        <div
          className="btn modules-button d-none d-sm-block"
          style={{ marginLeft: "auto", marginRight: "15px" }}
        >
          <FaGlasses className="fs-4" /> Student View
        </div>
        <div
          className="btn modules-button d-sm-none"
          style={{ marginLeft: "auto", marginRight: "15px" }}
        >
          <FaGlasses className="fs-4" />
        </div>
      </div>

      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <br />
      <br />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:cid/:id" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route
              path="Quizzes/QuizDetails/:quizId"
              element={<QuizDetails />}
            />
            <Route
              path="Quizzes/QuizDetailsEditor/:quizId"
              element={<QuizDetailsEditor />}
            />
            {/* Need to add route to quiz question and quiz preview */}
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
