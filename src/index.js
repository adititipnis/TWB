import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Home from './views/Home'
import Music from './views/Music'

export default class Index extends React.Component {

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    )
  }
}

render(<Index />, document.getElementById("root"));