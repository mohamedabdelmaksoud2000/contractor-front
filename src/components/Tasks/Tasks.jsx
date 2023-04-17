import React from "react";
import "./Tasks.css";
import { FaSearchPlus } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Tasks = () => {
  return (
    <div className="">
      <div className="table">
        <div className="header-table">
          <span>company name</span>
          <span>
            <AiFillBell />
            <BsQuestionCircleFill />
          </span>
        </div>
        <h1>task</h1>
        <div>
          <div className="inputs">
            <div>
              <input type="text" placeholder="search task..." />
              <FaSearchPlus />
            </div>
            <select name="" id="">
              <option>sort by:</option>
            </select>
            <select name="" id="">
              <option>filter by:</option>
            </select>
          </div>
          <Link to="/newtask">+ Add Task</Link>
        </div>
        <table className="table-tasks">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Clint</th>
            <th>Date</th>
            <th>Time</th>
            <th>Team</th>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
          <tr>
            <td>#11231</td>
            <td>#####</td>
            <td>Cody Fisher</td>
            <td>9/23/16</td>
            <td>3:00 pm</td>
            <td>Annette</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
