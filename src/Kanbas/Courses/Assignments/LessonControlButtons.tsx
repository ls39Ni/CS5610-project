import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleter from "./AssignmentDeleter";

export default function LessonControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  return (
    <div className="float-end mt-4 ms-5 ps-5">
      <GreenCheckmark />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <IoEllipsisVertical className="fs-4"/>
      <FaTrash className="text-danger ms-4 mb-1" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"/>
      <AssignmentDeleter assignmentId={assignmentId} deleteAssignment={() => deleteAssignment(assignmentId)} />
    </div>
);}
