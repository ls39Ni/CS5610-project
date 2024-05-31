import { BsFunnel, BsSearch, BsBoxArrowInRight, BsBoxArrowLeft, BsFillGearFill } from "react-icons/bs";
import "./index.css";

export default function CoursesNavigation() {
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
                <tr><th>Student Name</th><td>A1 Setup<br/><span style={{ fontSize: "13px" }}>Out of 100</span></td><td>A2 HTML<br/><span style={{ fontSize: "13px" }}>Out of 100</span></td><td>A3 CSS<br/><span style={{ fontSize: "13px" }}>Out of 100</span></td><td>A4 BOOTSTRAP<br/><span style={{ fontSize: "13px" }}>Out of 100</span></td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Jane Adams</th><td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Christina Allen</th><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Samreen Ansari</th><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Han Bao</th><td>100%</td><td>100%</td><td><input id="wd-value" className="form-control position-absolute ms-4 top-2" value="88.03" style={{ width: "100px", marginTop: "-19px", borderColor: "#A23333" }}/></td><td>98.99%</td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Mahi Sai</th><td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td>
                </tr>
                <tr>
                   <th style={{ color: "#A23333" }}>Siran Cao</th><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
);}
