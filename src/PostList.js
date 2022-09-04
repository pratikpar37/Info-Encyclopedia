import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const PostList = () => {
  const [postlist, setpostlist] = useState([]);
  useEffect(async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {

        setpostlist([...response]);

      });

  }, []);

  const handleRemove = (id) => {

    const newList = postlist.filter((item) => item.id !== id);

    setpostlist(newList);
  };

  let history = useHistory();
  const List = postlist.map((item) => {

    return (

      <div className="ui relaxed divided list" >
        <div className="item" style={{ fontFamily: " fantasy", fontSize: "18px", color: "purple", textDecoration: "underline", textShadow: "2px 2px 5px lightblue" }}>
          {item.title}
          <span style={{ display: "inline", float: "right" }}>
            <button className="ui green button">Edit</button>
            <button className="ui red button" onClick={() => handleRemove(item.id)}>Delete</button>
          </span>


        </div>
        <button className="ui primary button"  onClick={() => history.push(`/CommentDetail/${item.id}`)}>Comment</button>
        <button className="ui secondary button" onClick={() => history.push(`/PostDetail/${item.id}`)} >PostDetail</button>
        <div className="ui divider"></div>

      </div>

    );
  })

  return (
    <div className="ui relaxed divided list" style={{ marginTop: "25px" }}>
      <div className="item">
        {List}
      </div>
      {/* <h1 style={{color:"red",font:"60px cursive",textAlign:"center",marginTop:"250px"}}>Welcome to my User Page!!!</h1> */}

    </div>
  );

};

export default PostList;