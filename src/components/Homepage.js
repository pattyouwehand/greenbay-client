import React from 'react'
import {Navbar} from './Navbar'
import Container from './Container'

export default class Homepage extends React.Component {


  render() {

    return (
        <div className="Homepage">
          <header className="App-header">
            <h1 className="App-title">GREEN BAY</h1>   
            <Navbar />
          </header>
          <main>
            <p className="App-intro">
              <Container />
            </p> 
          </main>
        </div>
    );
  }
}