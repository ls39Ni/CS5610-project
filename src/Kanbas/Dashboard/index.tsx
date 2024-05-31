import "./styles.css";

export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full-stack developer, Summer 2024, Section 01
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS2
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Backend software developer, Summer 2024, Section 02
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Servers, Spring 2024, Section 01
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS4
                </a>
                <p className="wd-dashboard-course-title card-text">
                  DOM, Spring 2024, Section 03
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Git, Spring 2024, Section 02
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS6
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Deploying websites, Fall 2024, Section 01
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="project pic" max-width={100} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS7 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Debugging and testing, Fall 2024, Section 02
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);}
