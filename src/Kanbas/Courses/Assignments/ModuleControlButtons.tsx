import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end" >
      <div style={{ float: "left", padding: "5px", fontSize : "15px", border: "solid", borderColor: "#D4D4D4", borderRadius: "15px" }}>40% of total</div>
      <BsPlus color="#808080"/>
      <IoEllipsisVertical className="fs-4" color="#808080"/>
    </div>
);}
