import axios from "axios";
const REMOTE_SERVER = "https://kanbas-node-server-app-a6-vr8z.onrender.com";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post( `${COURSES_API}/${courseId}/assignments`, assignment );
  return response.data;
};
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignment: any) => {
  const response = await axios.
    put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};


