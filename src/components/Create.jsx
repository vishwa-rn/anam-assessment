import React, {useState} from "react";
import {useDispatch} from "react-redux"
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [users , setUsers] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value,
        });
       
      };
    
      const handleSubmit = (e) => {
       e.preventDefault();
        console.log(("users...",users));
       dispatch (createUser(users))
       navigate("/read");
      }

  return (
    <div>
      <h2 className="my 2">Enter the data</h2>

      <form  className="w-100 mx-auto" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder=" name"
            onChange={getUserData}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder=" email"
            onChange={getUserData}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="phone number"
            onChange={getUserData}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="age"
            onChange={getUserData}
            required
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            // checked={updateData.gender === "Female"}
            value="Male"
            onChange={getUserData}
            required
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            // checked={this.state.selectedOption === "Female"}
            value="Female"
            onChange={getUserData}
            required
          />
          <label>Famale</label>
          <input
            type="radio"
            name="gender"
            // checked={this.state.selectedOption === "Female"}
            value="other"
            onChange={getUserData}
            required
          />
          <label>Other</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;