import {useState,useContext} from 'react';
import {TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { userContext } from '../../App';
function Index() {
    const formStyle={
        display:"flex",
        flexDirection: "column",
        margin :" 150px auto",
        gap: "10px",
        alignItems: "center"
    }
    const loginPopup={
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
    
    const [mail,setMail]=useState("")
    const [pwd,setPwd]=useState("")
    const [state,setState]=useState(false)
    const {name,updateName} = useContext(userContext);
    const userData= JSON.parse(localStorage.getItem('data'))
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(userData)
        try{
            if(mail && pwd){
                const obj=userData.find(
                    (user)=>user.email===mail && user.password===pwd 
                );
                if(mail === obj.email && pwd === obj.password){
                    const demoName=obj.name;
                    updateName(demoName);
                    console.log(name);
                    setState(true)
                    }
                  }
                }catch(err){
                    alert("Enter valid Details");
                    setMail("")
                    setPwd("")
                    setState(false)
                }    
                document.querySelector("#loginPopup").style.display="flex";
    }
    return(
        <>
        <div style={formStyle}>
            <h2>Enter Login Credentials</h2>
            <TextField 
            style={{width:"320px"}} label="Email" required
            variant="outlined" id="email" value={mail}
            onChange={(e)=>setMail(e.target.value)}
            />
            <TextField type="password" style={{width:"320px"}} label="Password" variant="outlined" id="pass"
            value={pwd} required onChange={(e)=>setPwd(e.target.value)}/>
            <Button style={{width:"120px"}} variant="contained" color="primary"  onClick={handleClick}>
                <Link to={state ? "/" : "/login"} style={{color:"white", textDecoration:"none"}} >
                    Login
                </Link>
            </Button>
            <Link to="/createaccount" style={{textDecoration:"none"}}>
                    <Button style={{width:"300px"}} variant="contained">New User?Create Account</Button>
            </Link>
        </div>
        <div style={loginPopup} id="loginPopup">
            <h2>Hello {name}</h2>
            <h3>Successfully logged In &#x1f44d;</h3>
            <Link to="/"  style={{textDecoration:"none"}}>
                <Button type="submit" id="continue" style={{width:"200px"}} 
                variant="contained" color="primary">Explore Now</Button>
            </Link>
        </div>
        </>
    )
} 
export default Index
