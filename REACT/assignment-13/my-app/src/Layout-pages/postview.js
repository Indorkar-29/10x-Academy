import React from "react";
import "./postView.css";
export function PostView() {
  const userData = [
    {
      name: "Siva",
      location: "Bengaluru",
      likes: 64,
      description: "Kick start your career",
      PostImage: "img/img1.JPG",
      date: new Date(),
    },
    {
      name: "Neeraj",
      location: "Pune",
      likes: 30,
      description: "Sample Description",
      PostImage: "img/img2.JPG",
      date: new Date(),
    },
    {
      name: "Rahul",
      location: "Hyderabad",
      likes: 30,
      description: "Sample Description for Post",
      PostImage: "img/img3.JPG",
      date: new Date(),
    },
  ];

  return (
    <>
      <div className="header">
        <img className="clone" src="img/clone.png" alt="clone" />
        <h1 className="insta-clone">Instaclone</h1>
        <img className="cam" src="img/camera.png" alt="camera" />
      </div>

      {userData.map((user, idx) => {
        return (
          <div key={`post ${idx + 1}`} className="data">
            <h3 className="name">
              <strong>{user.name}</strong>
            </h3>
            <p className="location">{user.location}</p>
            <img className="dots" src="img/dots.png" alt="dots" />
            <img className="img" src={user.PostImage} alt="img" />
            <div>
              <img className="heart" src="img/heart.png" alt="heart" />
              <img className="share" src="img/share.png" alt="share" />
            </div>
            <div className="date">{`${user.date.getDate()}/${user.date.getMonth()}/${user.date.getFullYear()}`}</div>
            <p className="likes">{user.likes} likes</p>
            <p className="desc">
              <strong>{user.description}</strong>
            </p>
          </div>
        );
      })}
    </>
  );
}
