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

    
   
}