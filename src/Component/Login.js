import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const history = useHistory();
   
    useEffect(() =>{
        localStorage.clear();
    })

    const submitLogin = () => {
        
        if (userName !== "" && password !== "") {
            const apiUrl = 'https://dummyjson.com/auth/login';
            const requestBody = {
                username: userName,
                password: password
            };

            const headers = {
                'Content-Type': 'application/json' 
                // Add other headers as needed
            };

            axios.post(apiUrl, requestBody, { headers })
                .then(response => {
                    if(response.data){
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('userInfo', JSON.stringify(response.data));
                        console.log('login successfully')
                        history.push('/dashboard');

                    }
                    else{
                       history.push('/login');
                    }
                    
                })
                .catch(error => {
                    console.error('Error making POST request:', error);
                });
        }else {
            console.log("please enter valid username and password..!!!")
        }
    }
    return (
        <div>
            <form className='form-signin'>
                <div>
                    <img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' alt='mgs'width = '54px'></img>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassWord(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={submitLogin} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
