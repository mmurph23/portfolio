import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { dispatchSetName, dispatchSetLast, dispatchSetEmail, dispatchSetPhone, dispatchSetBody } from '../reducers/reducer';
import medium from '../medium.svg';
import '../css/finalPanel.css';
const profile = require('../assets/ssProfile.png');



const FinalPanel = (props) => (
          <div className="final-container container" style={{height:'100vh'}}>
               <div className="final-wrap wrap" style={{textAlign:'center'}}>
                    <p>In my free time, I often work on full-stack javascript projects. Some examples of my work can be found in my <a href="https://github.com/mmurph23" target="_blank">github</a> repo. I enjoy giving back, and you can check out my writing on lessons learned on <a href="https://medium.com/@patrickmurphy_53381" target="_blank">Medium</a>.</p>
                    <div className="profileWrap">

                    </div>
                    <p style={{marginTop:'20px'}}>If you'd like to know more about me, discuss the pro/cons of coffee by the carrafe, Javascript being the best gateway drug, or racing bicyles, reach out via your social media of choice or drop me a line below.</p>
               </div>
               <form className="contactForm"
                    action={`mailto:100psipr@gmail.com?subject=portfolio%20view&body=info: ${props.name} ${props.last}, ${props.email}, ${props.phone}, ${props.bod}` }
                    method="post"
                    enctype="multipart/form-data">
                    <input autoFocus type="text" id="firstName" onChange={(e) => props.dispatchSetName(e.target.value)}
                           placeholder={props.name ? props.name : "First Name"}/>
                      <input autoFocus type="text" id="lastName" onChange={(e) => props.dispatchSetLast(e.target.value)}
                           placeholder="Last Name"/>
                      <input autoFocus type="text" id="email" onChange={(e) => props.dispatchSetEmail(e.target.value)}
                           placeholder="Email"/>
                      <input autoFocus type="text" id="phone" onChange={(e) => props.dispatchSetPhone(e.target.value)}
                           placeholder="Phone"/>
                      <textarea autoFocus type="text" id="questions" onChange={(e) => props.dispatchSetBody(e.target.value)}
                           placeholder="Questions?"/>
                      <button type="submit">Submit</button>
               </form>
          </div>
);

FinalPanel.propTypes = {
     name: PropTypes.string,
     last: PropTypes.string,
     email: PropTypes.string,
     phone: PropTypes.string,
     bod: PropTypes.string
}

const mapStateToProps = state => ({
  name: state.STATE.name,
  last: state.STATE.last,
  email: state.STATE.email,
  phone: state.STATE.phone,
  bod: state.STATE.bod
});

const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchSetName,
     dispatchSetLast,
     dispatchSetEmail,
     dispatchSetPhone,
     dispatchSetBody
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(FinalPanel);
