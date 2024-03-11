import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ul className="sidebarList">
                <li><Link to="/opreationalCockpit">OpreationalCockpit</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                
                {/* <li><Link to ="/productDetails">ProductDetails</Link></li> */}
            </ul>
        </div>
    )
}
