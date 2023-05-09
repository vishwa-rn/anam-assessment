import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import axios from "axios";

const Read = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      axios
        .get("https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud")
        .then(function (response) {
          // handle success
          setUsers(response.data);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <CustomModal/> */}
      <h2>All Data</h2>
      <div>
        {users.map((user, index) => {
          return (
            <div className="card w-50 mx-auto">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  eamil
                </h6>
                <p className="card-text">number</p>
                <p className="card-text">age</p>
                <p className="card-text">gender</p>
                <a href="#" class="card-link">
                  view
                </a>
                <a href="#" class="card-link">
                  edit
                </a>
                <a href="#" class="card-link">
                  delete
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
