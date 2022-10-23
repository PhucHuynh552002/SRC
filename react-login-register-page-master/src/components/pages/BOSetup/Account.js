import React from 'react'
import { Link } from 'react-router-dom'

export default function account() {
    return (
        <header style={ HeaderStyle}>
        <div>
            <h1 className="text-center" style={{color: 'black'}}>ACCOUNT INFORMATION</h1>
                <Link to="/">
                    <div className="fixed-bottom">
                    <button className="primary-button">Log out</button>
                    </div>
                </Link>
        </div>
        <div class="container">
            <div class="circle"style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <p className='text'> Profile Picture</p>
            </div>
        </div>
        <div>
            <h1 className="text-center">Name</h1>
        </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}