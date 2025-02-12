import axios from "axios";
const REMOTE_SERVER = "https://kanbas-node-server-app-a6-vr8z.onrender.com";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course.id}`, course);
  return response.data;
};
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};
export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`${COURSES_API}/${id}`);
  return response.data;
};
