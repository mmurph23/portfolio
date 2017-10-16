// src/components/App/index.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { dispatchSetName, dispatchRunTrans1 } from '../reducers/reducer';
import '../css/intro.css';



const Intro = (props) => (
          <div className="intro-container container" style={{height:'100vh'}}>
               <div className="intro-wrap wrap" style={{textAlign:'center'}}>
                    <h1 className="h1Fade">Hi, my name is Patrick.</h1>
                    <h2 className="h2Fade">I'm a Frontend Developer and Full-Stack Enthusiast.</h2>
                    <form className="introFormFade">
                         <label for="name">What's your name?</label>
                         <input autoFocus type="text" id="name" onChange={(e) => props.dispatchSetName(e.target.value)}
                                onKeyPress={(e) => {if(e.which === 13){e.preventDefault();props.dispatchRunTrans1();}}}/>
                    </form>
                    <p className="introFormFade">( if you'd prefer to keep scrolling, we can get to know each other at another time )</p>
                    {/*   <i class="fa fa-long-arrow-down" aria-hidden="true"></i> */}
               </div>
          </div>
);

const mapStateToProps = state => ({
  name: state.STATE.name
});

const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchSetName,
     dispatchRunTrans1
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(Intro);
