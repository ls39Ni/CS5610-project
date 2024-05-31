import { BsCalendar2Range } from "react-icons/bs";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="ms-5">
      <label htmlFor="wd-name" className="mb-2">Assignment Name</label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" style={{ width: "800px" }}/>
      <br />
      <br />
      <textarea id="wd-description" className="form-control" style={{ width: "800px", height: "400px" }} >
        The assignment is available online.                                                                                                                   Submit a link to the landing page of your Web application running on Netlify.                                                               The landing page should include the following:                                                                                                       - Your full name and section                                                                                                                                       - Links to each of the lab assignments                                                                                                                          - Link to the Kanbas application                                                                                                                                   - Links to all relevant source code repositories                                                                                                       The Kanbas application should include a link to navigate back to the landing page.</textarea>
      <br />
      <div className="col">
        <div className="wd-flex-row-container">
          <label htmlFor="wd-points" className="me-3 pt-1" style={{ marginLeft: "240px" }}>Points</label>
          <input id="wd-points" className="form-control" value={100} style={{ width: "500px" }} />
        </div>
        <br />
        <div className="wd-flex-row-container">
          <label htmlFor="wd-group" className="me-3 pt-1" style={{ marginLeft: "150px" }}> Assignment Group </label><br/>
          <select id="wd-group" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div><br /><br />
        <div className="wd-flex-row-container">
          <label htmlFor="wd-display-grade-as" className="me-3 pt-1" style={{ marginLeft: "160px" }}> Display Grade as </label><br/>
          <select id="wd-display-grade-as" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <option value="PERCENTAGE">Percentage</option>
          </select>
        </div><br /><br />
        <div className="wd-flex-row-container float-start">
          <label htmlFor="wd-submission-type" style={{ marginLeft: "160px" }}> Submission Type </label>
          <p className="wd-border-fat wd-border-solid ms-3 pt-3 pb-3 ps-3 pe-3" style={{ width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <select id="wd-submission-type" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "450px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
              <option value="ONLINE">Online </option>
            </select><br /><br />
            <b>Online Entry Options</b><br/><br/>
            <input type="checkbox"
                   name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">&nbsp;&nbsp;Text Entry</label><br/><br/>
            <input type="checkbox"
                   name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">&nbsp;&nbsp;Website URL</label><br/><br/>
            <input type="checkbox"
                   name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">&nbsp;&nbsp;Media Recordings</label><br/><br/>
            <input type="checkbox"
                   name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">&nbsp;&nbsp;Student Annotation</label><br/><br/>
            <input type="checkbox"
                   name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">&nbsp;&nbsp;File Uploads</label><br/><br/>
          </p>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="wd-flex-row-container float-start">
          <label htmlFor="wd-assign-to" style={{ marginLeft: "234px" }}> Assign </label>
          <p className="wd-border-fat wd-border-solid ms-3 pt-3 pb-3 ps-3 pe-3" style={{ width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <label htmlFor="wd-assign-to" className="mb-1"><b>Assign to</b></label><br/>
            <input id="wd-assign-to" className="form-control" value="    Everyone" /><br/><br/>
            <div style={{ backgroundColor: "#F2F2F2", borderRadius: "3px", paddingLeft: "100px", marginLeft: "15px", marginTop: "-78px", width: "125px" }}><b>x</b></div><br/>
            <label htmlFor="wd-due-date"> <b>Due</b> </label> <br/>
              <input type="date"
                    className="form-control"
                    id="wd-due-date"
                    value="2024-05-13"/><br/><br />
            <div className="wd-flex-row-container">
              <div>
                <label htmlFor="wd-available-from"> <b>Available from</b> </label>
                <input type="date"
                      className="form-control"
                      id="wd-available-from"
                      value="2024-05-06"
                      style={{ width: "225px" }}/>
              </div>
              <div className="ms-3">
                <label htmlFor="wd-available-until"> <b>Until</b> </label><br />
                <input type="date"
                      className="form-control"
                      id="wd-available-until"
                      value="2024-05-20"
                      style={{ width: "225px" }}/><br/>
              </div>
            </div>
          </p>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <hr />
        <div className="wd-flex-row-container float-end me-5">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
              type="button" style={{ color: "black", backgroundColor: "#F5F5F5" }}>
              Group
          </button>
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-5 float-end">
            Assignment
          </button>
        </div>
      </div>
    </div>
  );
}

