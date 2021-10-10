import React, { useState } from "react";


const Form = () => {
   const[name, setname]=useState("");
   const[email, setemail]=useState("");
   const[address, setaddress]=useState("");
   const[age, setage]=useState(null);
   const[phone, setphone]=useState("");
   const onsubmit=(e)=>{
       e.preventDefault();
       console.log("Name:" ,name);
       console.log("Email:" ,email);
       console.log("Address:" ,address);
       console.log("Age:" ,age);
       console.log("Phone no:" ,phone);


   };

    return (
        <div>
            <form className="ui form" method="get">
                <div className="field">
                    <label> Name</label>
                    <input type="text" name="name" placeholder=" Name" onChange={e=>setname(e.target.value)} />
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
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="text" name="Age" placeholder="Age"  onChange={e=>setage(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Phone no.</label>
                    <input type="tel" name="Phone" placeholder="Phone no" onChange={e=>setphone(e.target.value)} />
                    <require/>
                </div>
                
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabindex="0"/>
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit" onSubmit={onsubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
