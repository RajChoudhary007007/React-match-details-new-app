import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/TeamMatches/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
