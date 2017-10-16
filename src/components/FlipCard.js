import React, { Component } from 'react';
import '../css/FlipCard.css';

class FlipCard extends Component{
  constructor(props) {
       super(props);
       this.state = {
            flipped: false,
            clicked: false
       }
       this.flip = this.flip.bind(this)
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true
    });
  }
  render() {
    var flippedCSS = this.state.flipped ? " front-flip" : "";
    if (!this.state.clicked) flippedCSS =  "";
    return (

         <div className="Card" onClick={this.flip}>
           <div className={"content"+flippedCSS}>
             <div className="front">
                <img src={this.props.image}/>
                 <h3>{this.props.title}</h3>
             </div>
             <div className="back">
               <p>{this.props.textBack}<a href={this.props.link} target="_blank">{this.props.link}</a></p>
             </div>
           </div>
         </div>


    );
  }
};
// End of Components

/*
<div className="Card" onClick={this.flip}>
  <div className={"Card-Front"+flippedCSS}>
    <img src={this.props.image}/>
    <h3>{this.props.title}</h3>
  </div>
  <div className={"Card-Back"+flippedCSS}>
    {this.props.children}
  </div>
</div>

*/


export default FlipCard;
