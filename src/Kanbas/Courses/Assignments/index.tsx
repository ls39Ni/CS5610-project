import { FaPlus } from "react-icons/fa6";
import { BsPlus, BsGripVertical, BsSearch, BsFileEarmarkText } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="ms-5">
      <div className="wd-flex-row-container justify-content-between">
        <div className="wd-flex-row-container">
          <BsSearch className="position-absolute float-start mt-4 ms-3" />
          <input id="wd-search-assignment"
                 placeholder="         Search..." className="" style={{ fontSize: "25px", width: "400px", height: "60px", borderRadius: "10px", borderColor: "#ECECEC" }} />
        </div>
        <div className="wd-flex-row-container float-end me-5">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
              type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
              <FaPlus className="position-relative me-2 mb-1" style={{ color: "black" }} />
              Group
          </button>
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-5 float-end">
            <FaPlus className="position-relative me-2 mb-1" style={{ color: "#FAFAFA" }} />
            Assignment
          </button>
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-module wd-module list-group-item p-0 mb-5 fs-5" style={{ width : "80%" }}>
          <div className="wd-title p-3 ps-2 pt-4 pb-4" style={{ backgroundColor: "#F5F5F5", borderColor: "#ECECEC" }}>
            <BsGripVertical className="me-2 fs-3" />
            <b style={{ color: "black" }}> ASSIGNMENTS</b>
            <ModuleControlButtons />
          </div>
          <ul className="wd-assignment-list-items wd-lessons list-group rounded-0">
            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth : "8px" , borderLeftColor : "green" }}>
              <div className="wd-flex-row-container">
                <BsGripVertical className="me-2 fs-3 ms-1 mt-4"/>
                <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: "left", color : "green" }} />
                  <div className="ms-5 me-5" style={{ fontSize: "19px" }} >
                    <a className="wd-assignment-link ms-5"
                      href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: "black", textDecoration: "none" }}>
                      <b>A1</b>
                    </a><br />
                    <span className="ms-5" style={{ color: "red" }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br />
                    <b className="ms-5">Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth : "8px" , borderLeftColor : "green" }}>
              <div className="wd-flex-row-container">
                <BsGripVertical className="me-2 fs-3 ms-1 mt-4"/>
                <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: "left", color : "green" }} />
                  <div className="ms-5 me-5" style={{ fontSize: "18.65px" }} >
                    <a className="wd-assignment-link ms-5"
                      href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: "black", textDecoration: "none" }}>
                      <b>A2</b>
                    </a><br />
                    <span className="ms-5" style={{ color: "red" }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <br />
                    <b className="ms-5">Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth : "8px" , borderLeftColor : "green" }}>
              <div className="wd-flex-row-container">
                <BsGripVertical className="me-2 fs-3 ms-1 mt-4"/>
                <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: "left", color : "green" }} />
                  <div className="ms-5 me-5" style={{ fontSize: "18.55px" }} >
                    <a className="wd-assignment-link ms-5"
                      href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: "black", textDecoration: "none" }}>
                      <b>A3</b>
                    </a><br />
                    <span className="ms-5" style={{ color: "red" }}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <br />
                    <b className="ms-5">Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

