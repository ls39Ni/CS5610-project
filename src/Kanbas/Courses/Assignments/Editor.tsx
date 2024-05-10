export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online
        Submit a link to the landing page of
        your Web application running on Netlify.
        The landing page should include the following:
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <label htmlFor="wd-group"> Assignment Group </label><br/>
        <select id="wd-group">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select><br /><br />
        <label htmlFor="wd-display-grade-as"> Display Grade as </label><br/>
        <select id="wd-display-grade-as">
          <option value="PERCENTAGE">Percentage</option>
        </select><br /><br />
        <label htmlFor="wd-submission-type"> Submission Type </label><br/>
        <select id="wd-submission-type">
          <option value="ONLINE">Online</option>
        </select><br /><br />
        Online Entry Options<br/>
        <input type="checkbox"
               name="check-genre" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry">Text Entry</label><br/>
        <input type="checkbox"
               name="check-genre" id="wd-website-url"/>
        <label htmlFor="wd-website-url">Website URL</label><br/>
        <input type="checkbox"
               name="check-genre" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
        <input type="checkbox"
               name="check-genre" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
        <input type="checkbox"
               name="check-genre" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload">File Uploads</label><br/><br/>
        <label htmlFor="wd-assign-to">Assign Assign to</label><br />
        <input id="wd-assign-to" value="Everyone" /><br /><br />
        <label htmlFor="wd-due-date"> Due </label> <br />
          <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/><br />
        <label htmlFor="wd-available-from"> Available from </label>
        <label htmlFor="wd-available-until"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Until </label><br />
          <input type="date"
                id="wd-available-from"
                value="2024-05-06"/>
          <input type="date"
                id="wd-available-until"
                value="2024-05-20"/><br/>
      </table>
    </div>
  );
}

