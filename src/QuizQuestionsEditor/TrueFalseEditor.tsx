import { BsCalendar2Range } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";

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
      <label htmlFor="wd-name" className="mb-2" style={{ marginLeft: "350px" }}>Enter your question and multiple answers, then select if True or False is the correct answer.</label>
      <br/>
      <label htmlFor="wd-name" className="mb-2" style={{ marginLeft: "350px" }}><b>Question:</b></label>
      <br />
      <textarea id="wd-description" className="form-control" style={{ width: "800px", height: "400px", marginLeft: "350px" }} 
        onChange={(e) => {}}>
      </textarea>
      <br />
      <label htmlFor="wd-name" className="mb-2" style={{ marginLeft: "350px" }}><b>Answers:</b></label>
      <br />
      <div className="col-sm-10" style={{ marginLeft: "350px" }}>
        <div className="form-check">
          <input className="form-check-input" type="radio"
            name="gridRadios" id="r3" value="option1" />
          <label
            style={{ width: "250px", height: "50px"}}>True</label></div>
        <div className="form-check">
          <input className="form-check-input" type="radio"
            name="gridRadios" id="r4" value="option2" />
          <label
            style={{ width: "250px", height: "50px"}}>False</label></div>
      </div>
      <hr />
      <div className="col" style={{ marginRight: "500px" }}>
        <div className="wd-flex-row-container float-end me-5">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
              type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
              <Link key={`/QuizQuestionsEditor`} to={`/QuizQuestionsEditor`} 
                style={{ color: "black", textDecoration: "none" }}>
                Cancel
              </Link>
          </button>
          <button onClick={() => {}} id="wd-add-assignment" className="btn btn-lg btn-danger me-5 float-end">
              <Link key={`/QuizQuestionsEditor`} to={`/QuizQuestionsEditor`} 
                style={{ color: "white", textDecoration: "none" }}>
                Update Question
              </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

