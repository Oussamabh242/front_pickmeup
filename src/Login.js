import './login.css' ; 
import { useState } from 'react';
import axios from 'axios';

export default function Login(){

    const [email,setEmail]=useState("") ; 
    const [password, setPassword] = useState("") ;
    const [autherr, setAutherr] = useState("") ;
    
    async function submit(e){
        e.preventDefault() ; 

        try{
            await axios.post("http://localhost:3001/api/users/auth ",{
                email, password
            })
            .then(res=>{
                if(res.data.status === "loged in"){
                    setAutherr("logged in")  ;
                    console.log(res.data.Token); 
                }
                if (res.data.status === undefined) {
                    setAutherr("worong credentials") ; 
                }
            }) ; 
        }

        catch(e){
            if(e.response.status == 404||403){
                setAutherr("wrong credentials") ; 
            } 
        }

    }

    return(
        <div className='body'>
        <div class="login-container">
            <h2>Login</h2>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button type="submit" onClick={submit}>Login</button>
            </form>
            <h4>{autherr}</h4>
        </div>
        </div>
    )

}