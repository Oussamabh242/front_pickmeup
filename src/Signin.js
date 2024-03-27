import React , {useState} from "react"

export default function SingIn(){

    let [isChecked , setIsChecked] = useState(false) ; 

    function handleChange(){
        if(isChecked===false){
          setIsChecked(true) ;
        }
        else{
            setIsChecked(false) ; 
        }
         
    }


    return (
        <>
         <div className='body'>
        <div class="login-container">
            <h2>Login</h2>
            <form>
                <input type="text" name="Name" placeholder="Name" ></input>
                <input type="text" name="Email" placeholder="Email" ></input>
                <input type="password" name="password" placeholder="Password" ></input>
                <label>Check if you are a driver :<input type="checkbox" checked={isChecked} onChange={handleChange}></input></label>
                {(isChecked) && (
                    <>
                        <input type="text" name="carmodel" placeholder="Car model" ></input>
                        <input type="text" name="license" placeholder="license number" ></input>
                    </>
                    
                )

                }
                <button type="submit" >Sign in</button>
            </form>
        </div>
        </div>
        </>
    )
}