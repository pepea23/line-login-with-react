import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './components/template/homepage'
import './utils/GlobalStyle.css'

export default function App() {
  function initializeLiff(myLiffId) {
    // eslint-disable-next-line no-undef
    liff
      .init({
        liffId: myLiffId
      })
      .then(() => {
        // start to use LIFF's api
      })
      .catch(err => {
        document.getElementById('liffAppContent').classList.add('hidden')
        document
          .getElementById('liffInitErrorMessage')
          .classList.remove('hidden')
      })
  }

  useEffect(() => {
    initializeLiff('1653734453-y5qv2ppm')
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}
