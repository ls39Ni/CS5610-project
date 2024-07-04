import { FaPlus } from "react-icons/fa6";
import { BsPlus, BsGripVertical, BsSearch, BsFileEarmarkText } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";
import React, { useState, useEffect } from "react";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment, setAssignments }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function Assignments() {
  const paramcid = useParams();
  const cid = paramcid.id;
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };
  const removeAssignment = async (moduleId: string) => {
    await client.deleteAssignment(moduleId);
    dispatch(deleteAssignment(moduleId));
  };
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
          <Link key={`${cid}/New`} to={`${cid}/New`} id="wd-add-assignment" className="btn btn-lg btn-danger me-5 float-end pt-3" >
            <FaPlus className="position-relative me-2 mb-1" style={{ color: "#FAFAFA" }} />
            Assignment
          </Link>
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
              <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth : "8px" , borderLeftColor : "green" }}>
                <div className="wd-flex-row-container">
                  <BsGripVertical className="me-2 fs-3 ms-1 mt-4"/>
                  <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: "left", color : "green" }} />
                    <div className="ms-5 me-5" style={{ fontSize: "19px", marginTop: "-25px" }} >
                      <Link key={`${assignment.course}/${assignment._id}`} to={`${assignment.course}/${assignment._id}`} className="wd-assignment-link ms-5" 
                        style={{ color: "black", textDecoration: "none" }}>
                        <br />
                        <b>{assignment.title}</b>
                      </Link><br />
                      <span style={{ color: "red" }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br />
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </div>
                  <LessonControlButtons 
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      removeAssignment(assignmentId);
                    }} />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

