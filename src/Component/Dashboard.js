import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


export default function Dashboard() {
    const[userDetails, setUserDetails]= useState([])
    const[isDialogBoxOpen, setDialogBoxOpen] = useState(false)
    const history = useHistory();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
   
        useEffect(()=>{
            const token = localStorage.getItem("token")
            console.log(token)
            if(token){
                const apiUrl = 'https://dummyjson.com/users';  
                axios.get(apiUrl)
                .then(response => {
                    setUserDetails(response.data.users)
                    
                })
                .catch(error => {
                    console.error('Error making get request:', error);
                });
            }
            else{
                history.push('/login');
            }
            
            
        },[]);
      const  handleRowClick = ()=>{
        setDialogBoxOpen(true)
        console.log(isDialogBoxOpen)
      }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Domain</th>
                        <th scope="col">IP</th>
                        <th scope="col">Address</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails?.map((item, index) =>
                    (
                    <tr onClick={handleRowClick} >
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.domain}</td>
                        <td>{item.ip}</td>
                        <td>{item.address.address}</td>
                        <td>{item.company.name}</td>
                    </tr> 
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
