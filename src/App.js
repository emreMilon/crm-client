import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  PageRender  from './PageRender'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
      <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
