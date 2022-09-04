import React, { useState } from "react";


const Form = () => {
   const[name, setname]=useState("");
   const[email, setemail]=useState("");
   const[address, setaddress]=useState("");
   const[age, setage]=useState(null);
   const[phone, setphone]=useState("");
   const onsubmit=(e)=>{
       e.preventDefault();
       console.log(name);
       console.log("Email:" ,email);
       console.log("Address:" ,address);
       console.log("Age:" ,age);
       console.log("Phone no:" ,phone);


   };

    return (
        <div style={{textAlign:"center", border:"3px solid blue",boxSizing:"content-box",width:"300px",padding:"15px",marginLeft:"40%",marginTop:"8%"}}>
            <form className="ui form" style={{display:"inline-block"}}  onSubmit={onsubmit} method="get">
                <div className="field" >
                    <label> Name</label>
                    <input type="text" name="name" placeholder=" Name" onChange={(e)=>{
                      
                       setname(e.target.value);
                       
                        
                    }} />
                    <require/>
                    
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="Email" name="Email" placeholder="Email" onChange={e=>setemail(e.target.value)} />
                    <require/>
                </div>
                <div className="field">
                    <label>Address</label>
                    <input type="text" name="Address" placeholder="Address" onChange={e=>setaddress(e.target.value)} />
                    <required/>
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="text" name="Age" placeholder="Age"  onChange={e=>setage(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Phone no.</label>
                    <input type="tel" name="Phone" placeholder="Phone no" onChange={e=>setphone(e.target.value)} />
                    <required/>
                </div>
                
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabindex="0"/>
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui green button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
