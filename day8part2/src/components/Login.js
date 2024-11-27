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
   
}