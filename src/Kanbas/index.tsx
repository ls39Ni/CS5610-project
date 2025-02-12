import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import ProtectedRoute from "./ProtectedRoute";

export default function Kanbas() {
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div id="wd-kanbas">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
              <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account/*" element={<Account />} />
                <Route path="Dashboard" element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}/>
                } />
                <Route path="Courses/:id/*" element={<Courses courses={courses}/>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
          </div>
        </div>
      </div>
    </Provider>
);}
