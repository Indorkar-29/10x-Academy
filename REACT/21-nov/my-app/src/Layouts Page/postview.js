import React, { useEffect, useState } from "react";
import "./postview.css";

const PostView = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((res) => {
        return res.json();
      })
      .then((userList) => {
        setUserData(userList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>InstaClone</h1>
      </div>
      {userData.map((user, idx) => {
        return (
            
          <div key={`post ${idx + 1}`}>
            <h3>
              <strong>{user.name}</strong>
            </h3>
            <p>{user.location}</p>
            <img className="img" src={user.PostImage} alt="img" />
            <div></div>
            <div>{user.date}</div>
            <p>{user.likes}</p>
            <p>
              <strong>{user.description}</strong>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default PostView;
