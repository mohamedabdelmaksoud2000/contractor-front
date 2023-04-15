import React from "react";
import "./TaskName.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineLeftSquare } from "react-icons/ai";
import { BiChevronRightSquare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
const TaskName = () => {
  return (
    <div className="TaskName">
      <Link to="/">
        <BsArrowLeftCircle /> Back to tasks
      </Link>
      <h1>Task Name</h1>
      <form action="">
        <div>
          <h3>Task for</h3>
          <a>Client Name</a>
        </div>
        <input
          type="text"
          placeholder="Title"
          value="Amet minim mollit non deserunt"
        />
        <textarea
          type="text"
          placeholder="Description"
          value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua."
        />
      </form>
      <div className="downsection">
        <div className="left">
          <div className="schedule">
            <h3>Schedule:</h3>
            <div>
              <span>
                <label htmlFor="">Start date:</label>
                <input type="text" value="12/8" />
              </span>
              <span>
                <label htmlFor="">End date:</label>
                <input type="text" value="20/8" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="">Times:</label>
                <input type="text" placeholder="Start time" value="2:00 pm" />
              </span>
              <span>
                <input type="text" placeholder="End time" value="10:00 am" />
              </span>
            </div>
          </div>
          <div className="team">
            <h3>Team:</h3>
            <ul>
              <li>Oudai Zedan</li>
              <li>Oudai Zedan</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div>
            <div>
              <h3>jul 2022</h3>
              <AiOutlineLeftSquare />
              <BiChevronRightSquare />
            </div>
            <div>
              <span>today</span>
              <span>
                <span>sort by:</span>{" "}
                <select name="" id="">
                  <option>Month</option>
                </select>
              </span>
              <BsThreeDotsVertical />
            </div>
          </div>
          <table className="table-task">
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            <tr>
              <td>
                <span>26</span>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>29</span>
              </td>
              <td>
                <span>30</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>
                  4 <span className="note-1">keep metup</span>
                </span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
              <td>
                <span>7</span>
              </td>
              <td>
                <span>8</span>
              </td>
              <td>
                <span>9</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>11</span>
              </td>
              <td>
                <span>12</span>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>
                  14<span className="note-2">keep metup</span>
                </span>
              </td>
              <td>
                <span>15</span>
              </td>
              <td>
                <span>16</span>
              </td>
              <td>
                <span>17</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>17</span>
              </td>
              <td>
                <span>18</span>
              </td>
              <td>
                <span>19</span>
              </td>
              <td>
                <span>20</span>
              </td>
              <td>
                <span>21</span>
              </td>
              <td>
                <span>22</span>
              </td>
              <td>
                <span>23</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>24</span>
              </td>
              <td>
                <span>25</span>
              </td>
              <td>
                <span>
                  26 <span className="note-1">keep metup</span>
                </span>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>30</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>31</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="footer-new-task">
        <Link to="/">cancel</Link>
        <span>
          <Link to="/taskName">Save And Create Another</Link>
          <Link to="/taskName">Save Project</Link>
        </span>
      </div>
    </div>
  );
};

export default TaskName;
