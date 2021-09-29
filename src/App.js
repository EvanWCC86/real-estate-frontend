import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import HomePage from './pages/HomePage'
import PropertyPage from './pages/PropertyPage'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import { useGlobalContext } from './globalContext'
import AboutPage from './pages/AboutPage'
import Agentspage from './pages/Agentspage'
import ContactPage from './pages/ContactPage'
import PropertiesPage from './pages/PropertiesPage'
const App = () => {
  // const [showSidebar, setShowSidebar]= useState(true);
  // const toggleSidebar = () => {
  //  setShowSidebar(!showSidebar)
  // }
  const {showSidebar,toggleSidebar} =useGlobalContext();
  
  return (
    <Router>
      
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/properties" component={PropertiesPage} />
        <Route exact path="/agents" component ={Agentspage} />
        <Route exact path="/properties/:id" component={PropertyPage} />
        <Route exact path="/evanadmin" component={Admin} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/agents" component={Agentspage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
