import React, { Component } from 'react';
import Data from './data.js';
import NavBar from './components/NavBar/NavBar.js';
import ProfileCard from './components/ProfileCard/ProfileCard.js';
import Connections from './components/Connections/Connections.js';
import './App.css';

class App extends Component {
  render = () => {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="main-content">
          <div className="connections__container">
            <Connections />
          </div>
          <div className="profiles__container">
            <div className="profiles">
              {Data.map((profile) => {
                return (
                  <div>
                    <ProfileCard key={profile.id} profile={profile} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;