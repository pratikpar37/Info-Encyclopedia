import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  useParams,
  useLocation
} from "react-router-dom";




const CommentDetail = (props) => {
  // const id=new URLSearchParams(props.location.search).get("id");
  const [commentdetailid, setcommentdetailid] = useState(null);
  const [detaillist, setdetaillist] = useState([]);
  console.log(props);


  const id = props.match.params.id;
  // setpostdetailid(id)
  useEffect(async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((response) => {

        setdetaillist([response]);
      });

  }, []);

  // console.log(detaillist[0]);
  // console.log(id);
  const list = detaillist.map((item) => {
    return (
      <div className="item" style={{ marginLeft: "40%", marginTop: "12%", border: "3px solid purple", boxSizing: "border-box", width: "400px", height: "300px", padding: "20px" }}>
        <p style={{ font: "16px bold cursive", color: "darkblue", padding: "5px" }}> Name: {item[0].name}</p>
        <br></br>
        <p style={{ font: "16px bold cursive", color: "darkred", padding: "5px" }}>Email: {item[0].email}</p>
        <br></br>
        {/* <p> Body:{item[0].body}</p>
      <br></br> */}
      <p style={{ font: "16px bold Cursive", color: "darkgreen", padding: "5px" }}>Body:{item[0].body}</p>
        <p style={{ font: "16px bold Cursive", color: "darkgreen", padding: "5px" }}>UserId:{item[0].postId}</p>
      </div>
    );
  })
  return (
    <div>
      <div className="ui divided list">{list}</div>
    </div>
  );
};

export default CommentDetail;