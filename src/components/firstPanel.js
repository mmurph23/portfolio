import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FlipCard from './FlipCard'
import '../css/FirstPanel.css';
const essex = require('../assets/ssEssex.png');
const brillio = require('../assets/ssBrillio.png');
const bizible = require('../assets/ssBizible.png');
const uvm = require('../assets/ssUVM.png');

let essexText = "A small insurance company in Essex, VT. Built in Wordpress, this is the first site that I built out from top-to-bottom, from comps using Illustrator and Photoshop to development.";
let essexLink = "http://www.essexagency.com/";
let brillioText = "Brillio is a global technology and business solutions consulting company focused on big data analytics. I primarily worked on an update to the homepage, including creation of a background hero-video on using Adobe Premiere and Media Encoder, and styling edits as directed.";
let brillioLink = "https://www.brillio.com/";
let bizibleText = 'Bizible is a B2B company specializing in marketing attribution and planning software. I performed many edits on the site, including the "mad-lib" style CTA at the bottom of the home-page.';
let bizibleLink = "https://www.bizible.com/";
let uvmText = 'The first project I worked on at New Breed was mobile optomization of the University of Vermont Continuing Education website. Tasks included troubleshooting and correcting breakpoint issues, and creation/implementation of the mobile nav.';
let uvmLink = "https://learn.uvm.edu/";


const FirstPanel = (props) => (
          <div className="first-container container trans1" style={{minHeight:'100vh', paddingBottom:'150px'}}>
               <div className="first-wrap wrap" style={{textAlign:'center'}}>
                    {props.name?
                    <h1 style={{fontSize:'40px'}}>Hi, {props.name}.</h1>
                    : <h1 style={{fontSize:'40px'}}>Nice to meet you.</h1>}
                    <p style={{paddingTop: '15px', paddingBottom: '15px', borderTop: '1px solid #ff22bb', borderBottom: '1px solid #5cb4ff',marginTop:'30px'}}>Thanks for taking a look at my portfolio. Here are some front-end projects I worked on as an intern at <a href="https://www.newbreedmarketing.com/" target="_blank">New Breed Marketing</a>.</p>
                    <ul style={{paddingTop:'150px'}}>
                         <li><FlipCard title="The Essex Agency" image={essex} textBack={essexText} link={essexLink}/></li>
                         <li><FlipCard title="Brillio" image={brillio} textBack={brillioText} link={brillioLink}/></li>
                         <li><FlipCard title="Bizible" image={bizible} textBack={bizibleText} link={bizibleLink}/></li>
                         <li><FlipCard title="UVM Continuing Ed" image={uvm} textBack={uvmText} link={uvmLink}/></li>
                    </ul>
               {/*   <i class="fa fa-long-arrow-down" aria-hidden="true"></i> */}
               </div>
          </div>
);

const mapStateToProps = state => ({
  name: state.STATE.name
});

export default connect(
     mapStateToProps,
     null
)(FirstPanel);
