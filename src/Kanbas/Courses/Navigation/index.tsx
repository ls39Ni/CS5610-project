import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const cid = useParams();
  const id = cid.id;
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={`${link}`} to={`${link}`} className={`list-group-item border border-0
              ${pathname.includes(link) ? "active" : "text-danger"}`}>
          <br />
          {link}
        </Link>
      ))}
    </div>
);}
