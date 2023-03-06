import React, { useEffect, useState } from 'react';
import "./postView.css";
export function PostView() {
    const [userData,setUserData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3004/user").then((res)=>{
        return res.json();
    }).then((userList)=>{
        setUserData(userList)
    }).catch((error)=>{
        console.log(error)
    })
    },[])
    
  return (
    <>
        <div className='header'>
            <img className='clone' src='img/clone.png' alt='clone'/>
            <h1 className='insta-clone'>Instaclone</h1>
            <img className='cam' src='img/camera.png' alt='camera'/>
        </div>

        {userData.map((user,idx)=>{   
            return (
                <div key={`post ${idx+1}`} className="data">
                    <h3 className='name'><strong>{user.name}</strong></h3>
                    <p className='location'>{user.location}</p>
                    <img className='dots' src='img/dots.png' alt='dots'/>
                    <img className='img' src={user.PostImage} alt="img"/>
                    <div>
                    <img className='heart' src='img/heart.png' alt='heart'/>
                    <img className='share' src='img/share.png' alt='share'/>
                    </div>
                    <div className='date'>{user.date}</div>
                    <p className='likes'>{user.likes} likes</p>
                    <p  className='desc'><strong>{user.description}</strong></p>
                </div>
            )
            })}
    </>
  );
}

// First run : npx json-server --watch Mock-data/data.json --port 3004
// Then open one more terminal to run : npm start