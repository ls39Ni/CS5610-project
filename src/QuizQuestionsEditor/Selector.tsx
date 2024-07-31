import { BsCalendar2Range } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInBlanksEditor from "./FillInBlanksEditor";

export default function Selector() {

  const [currentEditor, setEditor] = useState("MultipleChoiceEditor");

  const params = useParams();
  const id = params.id === "New" ? new Date().getTime().toString() : params.id;
  const course = params.cid;
  const [assignmentName, setAssignmentName] = useState("");

  const createAssignment = async (assignment: any) => {
    
  };

  const saveAssignment = async (assignment: any) => {
    
  };

  return (
    <div>
      <div id="wd-assignments-editor" className="ms-5 mt-5 wd-flex-row-container">
        <input id="wd-name" className="form-control"
          onChange={(e) => {}} style={{ width: "20%", height: "5%", marginLeft: "150px" }}/>
        <div className="wd-flex-row-container">
          <select id="wd-group" className="wd-css-styling-dropdowns ms-5" style={{ height: "40px", width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}
            onChange={(e) => {setEditor(e.target.value)}}>
            <option value="MultipleChoiceEditor">Multiple Choice</option>
            <option value="TrueFalseEditor">True/False</option>
            <option value="FillInBlanksEditor">Fill In the Blank</option>
          </select>
        </div>
        <label htmlFor="wd-name" className="mb-2 ms-5">Points</label>
        <input id="wd-name" className="form-control ms-2"
          onChange={(e) => {}} style={{ width: "5%", height: "5%" }}/>
        <br />
        <br /><br />
      </div>
      <hr />
      {currentEditor === "MultipleChoiceEditor" ? (
        <MultipleChoiceEditor />
      ) : currentEditor === "TrueFalseEditor" ? (
        <TrueFalseEditor />
      ) : currentEditor === "FillInBlanksEditor" ? (
        <FillInBlanksEditor />
      ) : (
        "No Editor Selected"
      )}
    </div>
  );
}

