import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  PageRender  from './PageRender'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
      </Switch>
    </Router>
  )
}

export default App
