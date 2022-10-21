import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/PreHomePage/LandingPage'
import LoginPage from './components/pages/PreHomePage/LoginPage'
import RegisterPage from './components/pages/PreHomePage/RegisterPage'
import ForgetPasswordPage from './components/pages/PreHomePage/ForgetPasswordPage'
import HomePage from './components/pages/BOSetup/HomePage'
import Janitor from './components/pages/JanitorSetup/Janitor'
import Collector from './components/pages/CollectorSetup/Collector'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/janitor" component={ Janitor } />
                    <Route path="/collector" component={ Collector } />
                </Switch>

            </div>
        </Router>
    )
}
