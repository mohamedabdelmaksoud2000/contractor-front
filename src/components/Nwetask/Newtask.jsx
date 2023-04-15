import React from "react";
import "./Newtask.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineLeftSquare } from "react-icons/ai";
import { BiChevronRightSquare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
const Newtask = () => {
  return (
    <div className="Newtask">
      <Link to="/">
        <BsArrowLeftCircle /> Back to tasks
      </Link>
      <h1>New task</h1>
      <form action="">
        <div>
          <h3>Task for</h3>
          <button>+ Add Client</button>
        </div>
        <input type="text" placeholder="Title" />
        <textarea type="text" placeholder="Description" />
      </form>
      <div className="downsection">
        <div className="left">
          <div className="schedule">
            <h3>Schedule:</h3>
            <div>
              <span>
                <label htmlFor="">Start date:</label>
                <input type="text" />
              </span>
              <span>
                <label htmlFor="">End date:</label>
                <input type="text" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="">Times:</label>
                <input type="text" placeholder="Start time" />
              </span>
              <span>
                <input type="text" placeholder="End time" />
              </span>
            </div>
            <span>
              <input type="checkbox" />
              <span>Schedule later</span>
            </span>
          </div>
          <div className="team">
            <h3>Team:</h3>
            <select name="" id="">
              <option>Choose team</option>
            </select>
            <div>
              <span>
                <span>Oudai zedan</span>
                <span>x</span>
              </span>
              <span>
                <span>Oudai zedan</span>
                <span>x</span>
              </span>
            </div>
            <span>
              <input type="checkbox" />
              <span>Schedule later</span>
            </span>
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

export default Newtask;
