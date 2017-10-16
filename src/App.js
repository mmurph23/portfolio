import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import medium from './medium.svg';
import './App.css';
import Intro from './components/intro';
import FirstPanel from './components/firstPanel';
import SecondPanel from './components/secondPanel';
import FinalPanel from './components/finalPanel';
const essex = require('./assets/ssEssex.png');


class App extends Component {
     componentDidUpdate(prevProps, prevState) {
          if (prevProps.trans1 !== this.props.trans1) {
               ReactDOM.findDOMNode(this.refs.trans1).scrollIntoView({behavior: "smooth", block:"nearest"});
          }
     }


  render() {
    return (
      <div className="App">
        <header className="App-header" style={{position:'fixed', zIndex:'100', width:'100vw', maxWidth:'100vw', height:'50px', padding:'10px 0px 10px 0px', paddingTop:'10px',}}>
             <ul style={{listStyleType:'none', float:'right', paddingTop:'5px', paddingRight:'15px'}}>
                  <li style={{display:'inline-block'}}><a href="https://www.facebook.com/closelywatched" target="_blank"><i class="fa fa-facebook-square" style={{color: '#ff22bb', fontSize: '40px', marginLeft: '10px', marginRight: '10px'}}></i></a></li>
                  <li style={{display:'inline-block'}}><a href="https://twitter.com/Patrick_M1986" target="_blank"><i class="fa fa-twitter-square" style={{color: '#ff22bb', fontSize: '40px', marginLeft: '10px', marginRight: '10px'}}></i></a></li>
                  <li style={{display:'inline-block'}}><a href="https://github.com/mmurph23" target="_blank"><i class="fa fa-github" style={{color: '#ff22bb', fontSize: '40px', marginLeft: '10px', marginRight: '10px'}}></i></a></li>
                  <li style={{display:'inline-block'}}><a href="https://medium.com/@patrickmurphy_53381" target="_blank"><img src={medium} class="fa fa-medium" style={{width: 'auto', height: '32px', marginLeft: '10px', marginRight: '10px', marginBottom: '-3px',border: '2px solid #ff22bb',borderRadius:'5px'}}/></a></li>
             </ul>
        </header>
        <div className="App-container" style={{paddingTop:'70px'}}>
          <Intro />
          <div className="bottomFade">
               <FirstPanel ref="trans1"/>
               <SecondPanel />
               <FinalPanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trans1: state.STATE.trans1
});

export default connect(
     mapStateToProps,
     null
)(App);
