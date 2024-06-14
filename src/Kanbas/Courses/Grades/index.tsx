import { BsFunnel, BsSearch, BsBoxArrowInRight, BsBoxArrowLeft, BsFillGearFill } from "react-icons/bs";
import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function CoursesNavigation() {
  
  const paramcid = useParams();
  const cid = paramcid.id;
  const users = db.users;
  const enrollments = db.enrollments;
  const assignments = db.assignments;
  const grades = db.grades;

  return (
    <div>
      <div className="wd-flex-row-container float-end me-5">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-start"
          type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
          <BsBoxArrowInRight className="me-2" style={{ color: "#666666" }} />
            Import
        </button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-start"
          type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
          <BsBoxArrowLeft className="me-2" style={{ color: "#666666" }} />
            Export
        </button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary float-start"
          type="button" style={{ color: "black", backgroundColor: "#F5F5F5", height: "50px", width: "65px" }}>
          <BsFillGearFill className="me-2" size={25} />
        </button>
      </div><br/><br/><br/>
      <div className="wd-flex-row-container float-start ms-3">
        <div>
          <b style={{ fontSize: "22px" }}>Student Names</b>
          <div className="wd-flex-row-container me-3">
            <BsSearch className="position-absolute float-start mt-4 ms-3" />
            <input id="wd-search-assignment"
                   placeholder="         Search Students" className="mt-2" style={{ fontSize: "17px", width: "400px", height: "50px", borderRadius: "10px", borderColor: "#ECECEC" }} />
          </div>
        </div>
        <div>
          <b style={{ fontSize: "22px" }}>Assignment Names</b>
          <div className="wd-flex-row-container">
            <BsSearch className="position-absolute float-start mt-4 ms-3" />
            <input id="wd-search-assignment"
                   placeholder="         Search Assignments" className="mt-2" style={{ fontSize: "17px", width: "400px", height: "50px", borderRadius: "10px", borderColor: "#ECECEC" }} />
          </div>
        </div>
      </div><br/><br/><br/><br/><br/>
      <div className="float-start ms-3">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 mt-2 float-start"
          type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
          <BsFunnel className="me-2" style={{ color: "#666666" }} />
            Apply Filters
        </button>
      </div><br/><br/><br/>
      <div className="container mt-3">
        <div id="wd-css-grades-responsive-tables">
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr><th>Student Name</th>
                  {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                      <td>{assignment.title}<br/><span style={{ fontSize: "13px" }}>Out of 100</span></td>
                  ))}
                </tr>
                {enrollments
                  .filter((enrollment: any) => enrollment.course === cid)
                  .map((enrollment: any) => (
                    <tr>
                      <th style={{ color: "#A23333" }}>{enrollment.user}</th> 
                      {grades
                        .filter((grade: any) => enrollment.user === grade.user)
                        .map((grade: any) => (
                          <td>{grade.grade}</td>
                      ))}
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
);}
