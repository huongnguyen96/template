import "./app.scss";
import React from "react";

function App(props) {
  const users = [
    {
      id: 1,
      name: "Nguyen Thi Huong",
      address: "Hai Duong",
    },
    {
      id: 2,
      name: "Nguyen Thi Hoa",
      address: "Hai Duong",
    },
    {
      id: 3,
      name: "Nguyen Thi Ha",
      address: "Hai Duong",
    },
    {
      id: 4,
      name: "Nguyen Thi U",
      address: "Hai Duong",
    },
  ];
  // const [users, setUsers] = React.useState();

  function handleDelete(index) {
    console.log(index);
    users.splice(index, 1);
    // setUsers([...users]);
    React.render().bind(this);
    console.log("users", users);
  }

  console.log("users 1", users);

  function handleChange(event) {
    console.log(event);
  }

  return (
    <div className="app">
      <div className="app-users">
        {users &&
          users?.length > 0 &&
          users.map((user, index) => (
            <div className="app-users__user" key={index}>
              <div className="name">{user?.name}</div>
              <div className="address">{user?.address}</div>
              <button
                className="btn btn-delete"
                onClick={() => handleDelete(index)}
              >
                Xóa
              </button>
              <input onChange={(e) => handleChange(e)} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
