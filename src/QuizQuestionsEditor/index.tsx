import { BsCalendar2Range } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";

export default function QuizQuestionsEditor() {
  const params = useParams();
  const id = params.id === "New" ? new Date().getTime().toString() : params.id;
  const course = params.cid;
  const [assignmentName, setAssignmentName] = useState("");

  const createAssignment = async (assignment: any) => {
    
  };

  const saveAssignment = async (assignment: any) => {
    
  };

  return (
    <div id="wd-assignments-editor" className="ms-5">
      <br/><br/>
      <label htmlFor="wd-name" className="mb-2" style={{ fontSize: "20px" }} >Questions</label><br/><br/>
      <div className="col">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1"
            type="button" style={{ color: "black", backgroundColor: "#F5F5F5", position: "absolute", left: "45%" }}>
            <Link key={`/QuizQuestionsEditor/Selector`} to={`/QuizQuestionsEditor/Selector`} 
              style={{ color: "black", textDecoration: "none" }}>
              + New Question
            </Link>
        </button><br/><br/><br/>
        <hr />
        <div className="wd-flex-row-container float-end me-5">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
              type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
              <Link key={`/Kanbas/Courses/${course}/Assignments`} to={`/Kanbas/Courses/${course}/Assignments`} 
                style={{ color: "black", textDecoration: "none" }}>
                Cancel
              </Link>
          </button>
          <button onClick={() => {}} id="wd-add-assignment" className="btn btn-lg btn-danger me-5 float-end">
              <Link key={`/Kanbas/Courses/${course}/Assignments`} to={`/Kanbas/Courses/${course}/Assignments`} 
                style={{ color: "white", textDecoration: "none" }}>
                Save
              </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

