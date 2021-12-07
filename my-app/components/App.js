import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Header'
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'

class App extends Component {

  state = {
    christmas: {}
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
    const play = require('audio-play');
    const load = require('audio-loader');

    load('jingle-bells.mp3').then(play);
  }

  render() {

    return (
      <div className="App">
        <meta http-equiv="refresh" content="10"/>
        <Header></Header>
        <div className="row mrgnbtm">
          <Christmas christmas={this.state.christmas}></Christmas>
        </div>
        <div className={"imgDiv"}>
          <img className={"image"} src="tree3.png" alt="Nasty christmas tree"/>
        </div>
        <div className={"imgDiv"}>
          <img src="john.gif"/>
        </div>
      </div>
    );
  }
}

export default App;
