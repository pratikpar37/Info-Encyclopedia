import React, { useState, useEffect } from "react";
import "./list.css";

const ToDoList = () => {
  const [Text, setText] = useState("");
  const [AddedValue, setAddedValue] = useState([]);
  const [count, setcount] = useState(0);
  const [clicked, setIsClicked] = useState(false);

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  const displayAddedValue = (e) => {
    e.preventDefault();
    setcount(count + 1);
    setAddedValue([...AddedValue, { text: Text, id: count, checked: false ,index:count}]);

  }


  const handleClick = (id) => {
    const ele=AddedValue.find(val=>val.id===id)
    if(ele)
    {
      const newEle={...ele,checked:!ele.checked};
      const newAddedValue=AddedValue.filter(ele=>ele.id!==id);
      // if(ele.checked)
      // {
      //   setAddedValue([...newAddedValue,newEle]);
      // }
      // else{
      //   newAddedValue.splice(newEle.index,0,newEle);
      //   setAddedValue(newAddedValue);
      // }

      setAddedValue([...newAddedValue,newEle]);
    
    }

    // setAddedValue(AddedValue.map((item) => {
    //   if (item.id === id) {
    //     item.checked = !item.checked;
    //   }
    //   return item;

    // }));





  };




  return (
    <div>
      <div style={{ marginLeft: "20%", marginTop: "12%", border: "3px solid blue", boxSizing: "border-box", width: "400px", height: "300px", padding: "20px" }}>

        {/* <h1 style={{color:"purple",font:"60px cursive",textAlign:"center",marginTop:"250px"}}>Welcome to my Contact Page!!!</h1> */}

        <h3 style={{ marginTop: "8%" }}>To-Do-List</h3>
        <form className="ui form" style={{ width: "65%" }}>
          <div className="field">
            <label><b>Items:</b></label>

            <input type="text" placeholder="Enter Item" name="toDolist" onChange={onInputChange} style={{ border: "2px solid blue" }} />

            <button className="ui violet button" style={{ marginTop: "1px", marginLeft: "3px" }}
              //   setText(e.target.value);
              //   console.log(e.target.value);

              // }}

              onClick={displayAddedValue}

            >
              Add
            </button>
          </div>
        </form>


      </div>
      <div style={{ marginLeft: "65%", marginTop: "-305px", border: "3px solid teal", boxSizing: "border-box", width: "400px", height: "300px", padding: "20px" }}>
        <div>
          <h4 style={{ color: "indianred", marginTop: "8px", paddingLeft: "5px", fontSize: "18px" }}>List of Items:</h4>
        </div>
        {AddedValue.map((item) => {
          return (
            <div className="ui form">
              <div className=" grouped fields">
                <div class="field">
                  <div class="ui radio checkbox" onClick={() => {
                     handleClick(item.id);
                     
                     } }  style={{ textDecoration: item.checked ? "line-through" : "none", color: "maroon" }}>
                    <input type="checkbox" name="example2"   />
                    <label >
                      <div id="list"   >
                        {/* style={{font:"20px bold serif",paddingLeft:"5px", cursor:"pointer",position:"relative",transition:"0.2s"}} */}
                        <div className="item" style={{color:"maroon"}} >{item.text}</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>




          );
        })}
      </div>

    </div>
  );



};

export default ToDoList;