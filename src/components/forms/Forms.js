import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.scss";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function handleSubmit(event){
        event.preventDefault();
            fetch("http://localhost:3001/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({user_email:email, user_pass: pass}),
            })
              .then(response => {
                return response.text();
              })
              .then(data => {
                // alert(data);
                console.log(data);
              });
    }

    return(
        <form>
            <h1>Login</h1>
            <div className="field">
                <label htmlFor={"email"}>Email</label>
                <input id="email" name="pass" type={"email"} required placeholder="example@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"pass"}>Password</label>
                <input id="pass" name="pass" type={"password"} required placeholder="Your password" value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
            </div>
            <div className="field">
                <button type={"submit"} className={"btn btn--primary"} onClick={handleSubmit}>Login</button>
            </div>
            <sub>Don&apos;t have an account? <Link to={"/dashboard/signup"}>Signup here</Link></sub>
        </form>
    )
}

const SignupForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState("");

    function handleSubmit(event){
        event.preventDefault();
            fetch("http://localhost:3001/users/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({user_first_name: firstName, user_last_name:lastName, user_email:email, user_con_pass:conPass, user_pass: pass, user_phone:phone}),
            })
              .then(response => {
                return response.text();
              })
              .then(data => {
                // alert(data);
                console.log(data);
              });
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div className="field">
                <label htmlFor={"first_name"}>First Name</label>
                <input id="first_name" name="first_name" type={"text"} required placeholder="John" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"last_name"}>Last Name</label>
                <input id="last_name" name="last_name" type={"text"} required placeholder="Doe" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"email"}>Email</label>
                <input id="email" name="pass" type={"email"} required placeholder="example@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"pass"}>Password</label>
                <input id="pass" name="pass" type={"password"} required placeholder="Your password" value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"con_pass"}>Confirm Password</label>
                <input id="con_pass" name="pass" type={"password"} required placeholder="Your password" value={conPass} onChange={(e)=>{setConPass(e.target.value)}}></input>
            </div>
            <div className="field">
                <label htmlFor={"tel"}>Mobile Number</label>
                <sub>* Your number is used for us to send you money through MobilePay</sub>
                <input id="tel" name="tel" type={"tel"} required placeholder="12 34 56 78"  value={phone} onChange={(e)=>{setPhone(e.target.value)}}></input>
            </div>
            <div className="field">
                <button type={"submit"} className={"btn btn--primary"}>Signup</button>
            </div>
            <sub>Already have an account? <Link to={"/dashboard/login"}>Login</Link></sub>
        </form>
    )
}

export {LoginForm, SignupForm};