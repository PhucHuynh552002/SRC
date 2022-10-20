import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

export default function HomePage() {
    return (
        <div>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" element="Home" />
					<Route path="/services" element="Services" />
					<Route path="/about" element="About" />
					<Route path="/contact" element="Contact" />
				</Switch>
			</Router>
		</>
            <Link to="/">
            <div className="fixed-bottom">
                <button className="primary-button">Log out</button>
            </div>
            </Link>
        </div>
    )
}
