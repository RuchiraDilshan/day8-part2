import {useState} from "react";
import {UseNavigate} from "react-router-dom";

export default function Login(){
    const navigate = UseNavigate();
    const [user,setUser] = useState({username: "", password: "", error: ""})
    const getTextinput =(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }

    const authenticate =() =>{
        if (user.username === "Admin" && user.password === "abc@123"){
            setUser({username:"", password:"",error:""})
            navigate('/dash');
        }
        else{
            setUser({'error':"Please check your username and password"})

        }
    }
    return(
        <div>
            <h1>Login here</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" onChange={getTextinput} ></input>
            </form>

            <form>
                <label>Password:</label>
                <input type="password" name="password" onChange={getTextinput} ></input>
            </form>

            <button onClick={authenticate}>Login</button>


        </div>
    );

   
}