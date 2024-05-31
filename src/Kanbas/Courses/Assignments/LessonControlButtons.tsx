import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end mt-4 ms-5 ps-5">
      <GreenCheckmark />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <IoEllipsisVertical className="fs-4"/>
    </div>
);}
