import axios from "axios";
import React, { useState, useEffect } from "react";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_USERS)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#C3D9D4",
        marginTop: "-30px",
        minHeight: "100vh",
      }}
    >
      <div style={{ padding: "10%", marginLeft: "20%", marginRight: "20%" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Users' Emails</th>
            </tr>
          </thead>
          {users.map((item, key) => (
            <tbody key={key}>
              <tr>
                <th scope="row">{item.id}-</th>
                <td className="text-left">{item.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UsersComponent;
