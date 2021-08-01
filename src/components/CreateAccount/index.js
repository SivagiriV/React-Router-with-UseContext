import React,{useState,useEffect, useContext} from 'react'
import {TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {userContext} from "../../App"

function Index() {
    const styles={
        formStyle:{
        display:"flex",
        flexDirection: "column",
        position:"relative",
        margin :" 250px auto",
        gap: "10px",
        alignItems: "center"
        },
        popup:{
            width: "500px",
            height: "500px",
            position:"absolute",
            display:"none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "20%",
            left:"35%",
            backgroundColor: "#000",
            color: "#fff",
            opacity: "0.9",
            transition: "0.5s"
        }
    }
    // const {user1,updateUser}=useContext(userContext)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useState([])
    useEffect(()=>{
        const data=localStorage.getItem("data");
        if(data){
            setUser(JSON.parse(data));
        }
    },[]);
    useEffect(()=> {
        localStorage.setItem("data",JSON.stringify(user));
    },[user]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name && email && password){
            const temp= [...user,{name: name,email: email,password: password}]
            setUser(temp);
            // updateUser(temp);
            setName("");
            setEmail("");
            setPassword("")
        }else{
            alert("Enter some Values")
        }
        document.querySelector('h5').innerHTML="Account Created Successfully"
        document.querySelector("#popup").style.display="flex"
    }
    // useEffect(()=> {
    //     console.log("signup-----",user1);
    // },[user1]);
    return (
        <>
            <form style={styles.formStyle} onSubmit={handleSubmit}>
                <h5>Sign Up</h5>
                <TextField 
                style={{width:"320px"}} label="userName" required
                value={name} variant="outlined" id="lname"
                onChange={(e)=>setName(e.target.value)}
                />
                <TextField style={{width:"320px"}} label="E-Mail" required
                value={email} variant="outlined" id="email"
                onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField type="password" 
                style={{width:"320px"}} value={password} required
                label="Set Password" variant="outlined" id="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <Button type="submit" style={{width:"200px"}} variant="contained" color="primary">Sign Up</Button>
            </form>
            <div style={styles.popup} id="popup">
                <h3>Account Created Succesfully</h3>
                <Link to="/login"  style={{textDecoration:"none"}}>
                    <Button type="submit" id="continue" style={{width:"200px"}} variant="contained" color="primary">Continue to login</Button>
                </Link>
            </div>
        </>
    )
}
export default Index