import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { FaRedoAlt } from 'react-icons/fa'
import "./Portfolio.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import costtrip from "../images/costtrip.png"
import beLocal from "../images/beLocal.png"
import covidTalent from "../images/MVP.png"
import esperança from "../images/Esperança.png"
import jsicon from "../images/JS.png"
import bootstrapicon from "../images/bootstrapicon.png"
import cssicon from "../images/CSS.png"
import herokuicon from "../images/heroku.png"
import htmlicon from "../images/HTML.png"
import jwticon from "../images/jwt-icon.png"
import mysqlicon from "../images/MySQL.png"
import nodeicon from "../images/nodeicon.png"
import reacticon from "../images/React.png"
import sequelizeicon from "../images/sequelize.png"
import emailicon from "../images/emailjsicon.png"
import expressicon from "../images/exicon.png"
import mapboxicon from "../images/mapboxico.png"
import googleicon from "../images/mapsicon.png"




class portfolio extends React.Component {

  render() {
    return(
      <div className="portf">
        <div className="title">
          <h2 className="projects">My Projects</h2>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <Flippy 
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => this.flippy = r}
              style={{backgroundColor: "white"}}
            >
              <FrontSide>
                <div class="card-body">
                  <h5 class="card-title"><b>Cost Trip Calculator</b></h5>
                </div>
                <img src={costtrip} class="card-img-top" alt="cost trip calculator" style={{ objectFit: "fill" }}/>
                <div className="rotate-card">
                  <p id="click"> <FaRedoAlt /> More info </p>
                </div>
              </FrontSide>
              <BackSide>
                <div class="card-body" style={{width: "100%", height: "100%", maxWidth:"100%", maxHeight:"100%", backgroundColor: "white"}}>
                  <h5 class="card-title"><b>Cost Trip Calculator</b></h5>
                  <p class="card-text">
                    This app was developed and designed using Mapbox-gl. 
                    <br></br>
                    <br></br>
                    The aim was to calculate the costs of a trip depending on the vehicle. 
                    It can be calculated by distance, entering coordinates or addresses.
                  </p>
                  <a onClick={(e) => {
                      e.preventDefault();
                      window.open("https://costscalculator.herokuapp.com/");
                    }} 
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Visit
                  </a>
                  <a onClick={(e) => {
                      e.preventDefault();
                      window.open("https://github.com/EstherUrzanqui/routecalculator");
                  }} 
                  class="btn btn-primary" 
                  style={{margin: "1%"}}
                  >
                    Code
                  </a>
                </div>
              </BackSide>
            </Flippy>  
          </div>
          <div class="col-sm-3">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => this.flippy = r}
              style={{backgroundColor: "white"}}
            >
              <FrontSide>
                <div class="card-body">
                  <h5 class="card-title"><b>beLocal</b></h5>
                </div>
                <img src={beLocal} class="card-img-top" alt="beLocal" style={{ objectFit: "fill" }}/>
                <div className="rotate-card">
                  <p id="click"> <FaRedoAlt /> More info </p>
                </div>
              </FrontSide>
              <BackSide>
                <div class="card-body" sytle={{maxWidth:"100%", maxHeight:"100%",}}>
                  <h5 class="card-title"><b>beLocal</b></h5>
                  <p class="card-text">
                    This app was developed and designed in three weeks as a group collaboration project.
                    <br></br>
                    It is a multi-sided marketplace that promotes local tourism and communities by providing eco friendly activities hosted by local experts.
                  </p>
                  <a onClick={(e) => {
                    e.preventDefault();
                    window.open("https://belocalcatalonia.herokuapp.com/");
                    }}  
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Visit
                  </a>
                  <a onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/EstherUrzanqui/fspt2-finalproject");
                    }} 
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Code
                  </a>
                </div>
              </BackSide>
            </Flippy> 
          </div>
          <div class="col-sm-3">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => this.flippy = r}
              style={{backgroundColor: "white"}}
            >
              <FrontSide>
                <div class="card-body">
                  <h5 class="card-title"><b>COVID-Talent</b></h5>
                </div>
                <img src={covidTalent} class="card-img-top" alt="Covid Talent" style={{ objectFit: "fill" }}/>
                <div className="rotate-card">
                  <p id="click"> <FaRedoAlt /> More info </p>
                </div>
              </FrontSide>
              <BackSide>
                <div class="card-body" sytle={{maxWidth:"100%", maxHeight:"100%",}}>
                  <h5 class="card-title"><b>COVID-Talent</b></h5>
                  <p class="card-text">
                    MVP designed and developed in two weeks with the aim to connect professionals that were laid off during the pandemic with companies in search of new talent.
                    It is free bias, only professional information is shown to make the search simple and accurate.
                  </p>
                  <a onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/EstherUrzanqui/fspt2-mvp-talent")
                    }} 
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Code
                  </a>
                </div>
              </BackSide>
            </Flippy>   
          </div>
          <div class="col-sm-3">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => this.flippy = r}
              style={{backgroundColor: "white"}}
            >
              <FrontSide>
                <div class="card-body">
                  <h5 class="card-title"><b>Esperança Project</b></h5>
                </div>
                <img src={esperança} class="card-img-top" alt="esperança" style={{ objectFit: "fill" }}/>
                <div className="rotate-card">
                  <p id="click"> <FaRedoAlt /> More info </p>
                </div>
              </FrontSide>
              <BackSide>
                <div class="card-body" style={{maxWidth:"100%", maxHeight:"100%",}}>
                  <h5 class="card-title"><b>Esperança Project</b></h5>
                  <p class="card-text">
                    I collaborated in this app as part of adding feature extension to the original code. 
                    My implementation included: Adding multiple form fields dynamically, and setting up a functional contact form. 
                  </p>
                  <a onClick={(e) => {
                    e.preventDefault();
                    window.open("https://volunteer-sign-up-project.herokuapp.com/");
                    }}  
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Visit
                  </a>
                  <a onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/cdorella/fspt2-volunteer-sign-up-project");
                    }} 
                    class="btn btn-primary" 
                    style={{margin: "1%"}}
                  >
                    Code
                  </a>
                </div>
              </BackSide>
            </Flippy>  
          </div>
        </div>
        <div class="row" id="tools" >
          <h4>
            <b>Tech:</b>
          </h4>
          <div className="icons">
            <img src={jsicon} style={{width: "6%", height: "6%" }}/>
            <img src={htmlicon} style={{width: "6%", height: "6%" }}/>
            <img src={cssicon} style={{width: "6%", height: "6%" }}/>
            <img src={reacticon} style={{width: "6%", height: "6%" }}/>
            <img src={nodeicon} style={{width: "6%", height: "6%" }}/>
            <img src={expressicon} style={{width: "6%", height: "6%" }}/>
            <img src={mysqlicon} style={{width: "6%", height: "6%" }}/>
            <img src={sequelizeicon} style={{width: "6%", height: "6%" }}/>
            <img src={bootstrapicon} style={{width: "6%", height: "6%" }}/>
            <img src={jwticon} style={{width: "6%", height: "6%" }}/>
            <img src={herokuicon} style={{width: "6%", height: "6%" }}/>
            <img src={emailicon} style={{width: "6%", height: "6%" }}/>
            <img src={mapboxicon} style={{width: "9%", height: "9%" }}/>
            <img src={googleicon} style={{width: "10%", height: "10%" }}/>
          </div>
        </div>
      </div>
    )
  }
  }
 

export default portfolio