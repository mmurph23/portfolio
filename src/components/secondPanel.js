import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import '../css/secondPanel.css';
const ddc = require('../assets/ssDDC.png');


const SecondPanel = (props) => (
          <div className="second-container container" style={{minHeight:'100vh', paddingTop:'0px'}}>

               <div className="second-wrap wrap" style={{textAlign:'center'}}>

                    <p style={{paddingTop: '35px', paddingBottom: '15px', borderTop: '1px solid #ff22bb', borderBottom: '1px solid #5cb4ff'}}>Currently, I work as a front-end developer at <a href="http://www.dealer.com/" >Dealer.com</a>, the largest provider of websites and software sales tools for car dealerships in the United States. <p style={{display:'block', marginTop:'20px', border:'none', width:'100%', maxWidth:'100%'}}>Our sites are built on a variety of languages, but I primarily utilize HTML/CSS/Javascript on top of Apache Velocity, a Java based XML templating system.</p></p>

                    <div className="second-img-wrap">
                         <p className="fcaP">A sampling of the templates and variations we maintain can be seen by clicking the example image below.</p>
                         <a href="https://fcademo1.cms.dealer.com/" target="_blank"><img src={ddc}/></a>

                    </div>

                    {/*   <i class="fa fa-long-arrow-down" aria-hidden="true"></i> */}
               </div>
          </div>
);

export default SecondPanel;

/*const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchSelectedCase
}, dispatch);

export default connect(
     null,
     mapDispatchToProps
)(SecondPanel);*/
